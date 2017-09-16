'use strict'

//import modules require from node
const mongoose = require('mongoose');

const app = require('./app.js');//can be reference 'app' with './app.js'
const config = require('./config.js');



//stablish db connection
mongoose.connect(config.db, (error, response) => {
	if (error) {
		return console.log('ERROR '+error);
	}
	console.log('Connection to database done successfully...');
	
	app.listen(config.port, () => {
		console.log(`Server runing, listen port ${config.port}... `);
	});

});
