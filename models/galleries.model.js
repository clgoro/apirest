"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var GallerieSchema = Schema({
	photo: String,
	

})

module.exports = mongoose.module('Users', GallerieSchema);