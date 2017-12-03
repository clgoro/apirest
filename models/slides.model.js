"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var SlidesSchema = Schema({
	image: String,
	titulo: String,
	description: String

})

module.exports = mongoose.module('Users', SlidesSchema);