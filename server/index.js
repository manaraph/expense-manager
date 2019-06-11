require('dotenv').config({path: '.env.local'});

const mysql = require("mysql");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : process.env.HOST,
		user     : process.env.USERNAME,
		password : process.env.PASSWORD,
		database : process.env.DATABASE
	});
	res.locals.connect();
	next();
});

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.SERVER}:${process.env.PORT}`));
