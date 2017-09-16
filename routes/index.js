'use strict'

const express = require('express');
const api_rest = express.Router();

//import product controller
const ProductCtrl = require('../controllers/product.js');

//handle request
api_rest.get('/product', ProductCtrl.getProducts);


api_rest.get('/product/:productId', ProductCtrl.getProduct);


api_rest.post('/product', ProductCtrl.createProduct);


api_rest.put('/product/:productId', ProductCtrl.updateProduct);


api_rest.delete('/product/:productId', ProductCtrl.deleteProduct);

module.exports = api_rest;