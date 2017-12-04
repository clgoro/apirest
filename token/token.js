"use strict"

var token = require("jwt-simple");

var moment = require('moment');

var secretToken = "secret";

exports.createToken = function(user){

	var loadToken = {

		sub: user._id,
		name: user.user,
		now: moment().unix(),
		exp: moment().add(30, "days").unix()
	}

	return token.encode(loadToken, secretToken)
}