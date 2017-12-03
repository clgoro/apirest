"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UsersSchema = Schema({
	user: String,
	password: String,

})

module.exports = mongoose.model('Users', UsersSchema);