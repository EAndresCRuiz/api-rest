'use strict'

const express = require('express');
const api_rest = express.Router();

//import product controller
const ProductCtrl = require('../controllers/product.js');
const UserCtrl = require('../controllers/user.js');

//import middleware for auth validation
const auth = require('../middlewares/auth');

//handle request
api_rest.get('/product', ProductCtrl.getProducts);


api_rest.get('/product/:productId', ProductCtrl.getProduct);


api_rest.post('/product', ProductCtrl.createProduct);


api_rest.put('/product/:productId', ProductCtrl.updateProduct);


api_rest.delete('/product/:productId', ProductCtrl.deleteProduct);


api_rest.post('/user/signup', UserCtrl.signUp);


api_rest.post('/user/signin', UserCtrl.signIn);


api_rest.get('/private', auth, (req, res) => {//when you only export one method like a middleware, only use the name
	//it is not necesary reference the method name auth.isAuth but auth

	res.status(200).send({ message: 'Access granted'});

});


module.exports = api_rest;