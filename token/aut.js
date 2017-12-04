"use strict"

var token = require("jwt-simple");
var moment = require("moment");
var secretToken = "secret";

exports.authentication = function(req, res, next){

	if(!req.headers.authorization){

		return res.status(404).send({message: " No Authorization Headers"})
	}else{

		var sentToken = req.headers.authorization.replace(/['"]+/g,'');

		try{

			var loadToken = token.decode(sentToken, secretToken);

			if(loadToken.exp <= moment().unix()){

				return res.status(403).send({message: "Expired Token"})


		}


		}catch(exception){

			console.log(exception)
			return res.status(403).send({message: "Invalid Token"})


			}

			req.userToken = loadToken;
			next();
	}

}