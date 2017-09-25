'use strict'

//import modules require from node
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

//initializing express application
const app = express();

const api_rest = require('./routes');//it is not necessary indicate index.js by default always is called when it is not specified

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.engine('.hbs', hbs({

	defaultLayout: 'default',
	extname: '.hbs'

}));
app.set('view engine', '.hbs');

//set to use and handle routes requested
app.use('/api', api_rest);
app.get('/login', (req, res) => {
	res.render('login');//look for a .hbs on views folder level, because of set on app.engine 
});

module.exports = app;