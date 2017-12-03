"use strict"

var express = require("express");

var slidesController = require("../controllers/slides.controller.js");

var api = express.Router();

api.get("/testsc", slidesController.slidesTest);

module.exports = api;
