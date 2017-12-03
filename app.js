"use strict"

var express = require("express");
var bodyParser = require("body-parser")

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var routeUsers = require("./routes/user.routes.js");
var routeSlides = require("./routes/slides.routes.js");
var routeGalleries = require("./routes/gallery.routes.js");


// app.get("/pruebas", function(req,res){
// 	res.status(200).send({message: "welcome"});

// })

app.use("/api", routeUsers);

module.exports = app;