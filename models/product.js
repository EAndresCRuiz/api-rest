'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	name: String,
	picture: String,
	price: { type: Number, default: 0 },//type indicates the type of field or data, attach the 0 how default value
	category: { type: String, enum: ['computers','phones'] },//establish valid values for this field
	description: String
});


module.exports = mongoose.model('Product', ProductSchema);