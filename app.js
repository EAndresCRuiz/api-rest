'use strict'

//import modules require from node
const express = require('express');
const bodyParser = require('body-parser');

//initializing express application
const app = express();

const api_rest = require('./routes');//it is not necessary indicate index.js by default always is called when it is not specified

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api_rest);

module.exports = app;