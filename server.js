const express = require('express');
const app = express();

app.listen(5000);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/Assets'));

app.get('/',async (req,res) => {
	// const articles = await Article.find().sort({createdAt: 'desc'});
	res.render('index');
});
