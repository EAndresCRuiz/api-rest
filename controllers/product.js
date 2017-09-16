'use strict'

//import product model 
const Product = require('../models/product');

function getProducts (req, response) {

	Product.find({}, (error, products) => {

		if (error) {
			return response.status(500).send({ message: `failed to query products: ${error}` });
		}

		if (!products) {
			return response.status(404).send({ message: "there isn't products" });
		}

		response.status(200).send({ products });//when variable have the same name of key we have use only put variable instead of 
		//{ products: products }

	});

}

function getProduct (req, response) {

	let productId = req.params.productId;

	Product.findById(productId, (error, product) => {
		
		if (error) {
			return response.status(500).send({ message: `failed to query product: ${error}` });
		}

		if (!product) {
			return response.status(404).send({ message: "product doesn't exist" });
		}

		response.status(200).send({ product });//when variable have the same name of key we have use only put variable instead of 
		//{ product: product }
	});

}

function createProduct (req, response) {
	
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

}

function updateProduct (req, response) {
	
	let productId = req.params.productId;
	let updatedata = req.body;//data received to be updated

	Product.findByIdAndUpdate(productId, updatedata, (error, productupdt) => {

		if (error) {
			response.status(500).send( { message: `failed to update product ${error}` } );
		}

		response.status(200).send( { message: 'product updated successfully', productupdt } );

	});

}

function deleteProduct (req, response) {
	
	let productId = req.params.productId;

	Product.findById(productId, (error, product) => {

		if (error) {
			response.status(500).send( { message: `failed to delete product ${error}` } );
		}

		product.remove(error => {

			if (error) {
				response.status(500).send( { message: `failed to delete product ${error}` } );
			}

			response.status(200).send( { message: 'product removed successfully' } );

		});

	});

}

module.exports = {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct
}