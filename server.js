const express = require('express');
const mongoose = require('mongoose');
const app = express();
const USER = require('./Models/UserMongo');
const User_Review = require('./Models/review');
app.listen(5000);

mongoose.connect('mongodb://0.0.0.0:27017/user', {useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log('mongodb connected');
}).catch((error) =>{
    console.log('Failed to connect ' + error);
})

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/Assets'));


app.get('/',(req,res) => {
	res.render('index', {mes: ''});
});

let username = '';

app.post("/register", async(req, res) => {
	const myData = {
		email: req.body.name,
		password: req.body.password
	}
	const check_user = await USER.findOne({email: myData.email});
	if(check_user === null){
		try{
			await USER.insertMany([myData]);
			console.log("item saved to database");
		} catch (error) {
			console.log(error);
		}
		res.redirect('/');
	}
	else{
		console.log('Email already exists');
		let m = '*** Email already exists';
		res.render('index', {mes: m});
	}	
});

app.post("/", async(req, res) => {
	const myData = {
		email: req.body.name,
		password: req.body.password
	}
	const check_user = await USER.findOne({email: myData.email});
	if(check_user === null){
		console.log('User not found');
		let m = '*** Wrong Mail ID';
		res.render('index', {mes: m});
	}
	else{
		if(check_user.password === myData.password){
			username = myData.email;
			res.redirect('/homepage');
		}
		else{
			console.log('Incorrect Password');
			let m = '*** Incorrect Password';
			res.render('index', {mes: m});
		}
	}
	
});

// The HOMMONONO WEBSITE

app.get('/homepage', (req,res) => {
	res.render('homepage', {user: username.split('@')[0]});
})

app.get('/Canteens', async(req,res) => {
	try{
		rev = await User_Review.findOne({});
	} catch (error) {
		console.log(error);
	}

	if(rev != null){
		console.log('previous review extracted');
		console.log(rev);
		res.render('food', {user: username.split('@')[0], review: rev.review});
	}
	else {
		res.render('food', {user: username.split('@')[0], review: ''});
		console.log('Unsuccesful previous review extracted');
	}
});

// app.get('/Restaurants', (req,res) => {
// 	res.render('food', {user: username.split('@')[0], review: ''});
// })

// app.get('/Messes', (req,res) => {
// 	res.render('food', {user: username.split('@')[0], review: ''});
// })

app.post("/Canteens", async(req, res) => {
	const myData = {
		review: ''
	}
	try{
		prev_rev = await User_Review.findOne({});
	} catch (error) {
		console.log(error);
	}
	
	if(prev_rev === null){
		myData.review = req.body.name;
		console.log('previous review extracted');
	}
	else{
		myData.review = prev_rev.review + req.body.name;
		console.log('Unsuccesful previous review extracted');
	}
	
	res.render('food', {user: username.split('@')[0], review: myData.review});
	
	try{
		await User_Review.insertMany([myData]);
		console.log("1 review saved to database");
	} catch (error) {
		console.log(error);
	}
});



// To check user login credentials (in case of emergency)  
app.get('/userlist', async (req,res) =>{
	const users = await USER.find({});
	res.send(users);
})
/*   ****** Forbidden function   (delete all data in mongo)
	app.get('/userdelete', async (req,res) =>{
	await USER.deleteMany({});
	res.send('Data lost');
})
*/
// Forbidden
app.get('/reviewdelete', async (req,res) =>{
	await User_Review.deleteMany({});
	res.send('Data lost');
})

app.get('/reviewlist', async (req,res) =>{
	const users = await User_Review.find({});
	res.send(users);
})