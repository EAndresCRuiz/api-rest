'use strict'

const mongoose = require('mongoose');
const User = require('../models/user');//also can be '../user.js'

function singUp (req, res) {
	
	let user = new User({
		email: req.body.email,
		displayName: req.body.displayName
	});

	user.save((err) => {
		if (err) {
			return res.status(500).send({ message: `Failed to register user: ${err}` })
		}

		return res.status(200).send({ token: service.createToken(user) })
	});
}

function singIn (req, res) {
	
}

module.exports = {
	singUp,
	singIn
};
