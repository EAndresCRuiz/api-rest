'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken (user) {
	const payload = {
		sub: user._id,//user id, recommended not be a user id from mongodb
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()//add 14 days to current date
	};

	return jwt.encode(payload, config.SECRET_TOKEN);

}

function decodeToken (token) {

	const decode = new Promise((resolve, reject) => {//creation of promise native ECMA6

		try{

			const payload = jwt.decode(token, config.SECRET_TOKEN);
			console.log(payload);
			if (payload.exp <= moment().unix()) {

				reject({ 
					status: 401,
					message: `Token expired` 
				});

			}

			resolve(payload.sub);


		}catch(error){

			reject({
				status: 500,
				message: 'Invalid token'
			});

		}

		});

	return decode;
}

module.exports = {
	createToken,
	decodeToken
}
/*
reject({ 
					status: 401,
					message: `Token expired` 
				});

			}

			resolve(payload.sub);


		}catch(error){

			reject({
				status: 500,
				message: 'Invalid token'
			});
*/