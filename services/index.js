'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function cretaeToken (user) {
	const payload = {
		sub: user._id,//user id, recommended not be a user id from mongodb
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()//add 14 days to current date
	};

	return jwt.encode(payload, config.SECRET_TOKEN);

}

module.exports = cretaeToken;