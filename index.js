	"use strict"

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 1234;

mongoose.connect("mongodb://localhost:27017/mongodb", (error, respuesta)=>{
	if (error){
		throw error;
	}else{
		console.log("connection established");

		app.listen(port, function(){

			console.log("Api server http://localhost:" + port)
		})
	}
})