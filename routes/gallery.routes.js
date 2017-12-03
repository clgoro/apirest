"use strict"

var express = require("express");

var galleriesController = require("../controllers/galleries.controller.js");

var api = express.Router();

api.get("/testtc", galleriesController.galleriesTest);

module.exports = api;
