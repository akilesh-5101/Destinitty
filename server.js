const express = require('express');
const mongoose = require('mongoose');
const app = express();
const USER = require('./Models/UserMongo');

app.listen(5000);

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

app.get('/homepage', (req,res) => {
	res.render('homepage', {user: username});
})

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

