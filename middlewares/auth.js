'use strict'

const services = require('../services');

function isAuth (req, res, next) {
	
	if (!req.headers.authorization) {

		return res.status(403).send({ message: `Access forbidden` });

	}

	const token = req.headers.authorization.split(' ')[1];
	console.log(token);
	services.decodeToken(token)
		.then((response) => {
			req.user = response
			next();
		})//in success i.e. resolve
		.catch((error) => {
			
			//res.status(response.status).send(response.message);
			res.status(500).send(error.message);

		});

}

module.exports = isAuth;