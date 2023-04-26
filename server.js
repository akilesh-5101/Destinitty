const express = require('express');
const authenticationRouter = require('./routes/authentication');
const app = express();

app.listen(5000);

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/Assets'));

app.get('/',(req,res) => {
	// const articles = await Article.find().sort({createdAt: 'desc'});
	res.render('index');
});

app.use('/account', authenticationRouter);