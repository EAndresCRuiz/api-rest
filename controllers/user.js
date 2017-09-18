'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');//also can be '../user.js'
const service = require('../services');

function signUp (req, res) {
	
	if (!req.body) {
		return res.status(500).send({ message: `There is no data to register visitor` });
	}

	let user = new User({
		email: req.body.email,
		displayName: req.body.displayName
	});

	user.save((err) => {
		if (err) {
			return res.status(500).send({ message: `Failed to register user: ${err}` });
		}

		return res.status(200).send({ token: service.createToken(user) })
	});
}

function signIn (req, res) {

	User.find({ email: req.body.email }, (err, user) => {
		if (err) {

			return res.status(500).send({ message: err });

		}

		if (!user) {

			return res.status(404).send({ message: 'User is not registered'});

		}

		req.user = user;
		res.status(200).send({
			message: 'Login successfull',
			token: service.createToken(user)
		});

	});
	
}

module.exports = {
	signUp,
	signIn
};
