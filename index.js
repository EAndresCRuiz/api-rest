'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import product model 
const Product = require('./models/product');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


//handle request
app.get('/api/product', (req, response) => {
	response.status(200).send({ products: [] });
});

app.get('/api/product/:productId', (req, response) => {

});

app.post('/api/product', (req, response) => {
	
	console.log('POST /api/product');
	console.log(req.body);


	let product = new Product();
	product.name = req.body.name;
	product.picture = req.body.picture;
	product.price = req.body.price;
	product.category = req.body.category;
	product.description = req.body.description;
	
	product.save((error, productStore) => {
		if (error) {
			response.status(500).send( { message: `failed to save product in database. ${error}` } );
		}

		response.status(200).send( { product: productStore } );

	});
});

app.put('/api/product/:productId', (req, response) => {

});

app.delete('/api/product/:productId', (req, response) =>{

});



//stablish db connection
mongoose.connect('mongodb://localhost:27017/shop', (error, response) => {
	if (error) {
		return console.log('ERROR '+error);
	}
	console.log('Connection to database done successfully...');
	
	app.listen(port, () => {
		console.log(`Server runing, listen port ${port}... `);
	});

});
