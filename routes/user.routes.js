"use strict"

var express = require("express");

var userController = require("../controllers/user.controller.js");

var api = express.Router();

api.get("/testsc", userController.userTest);

api.post("/create", userController.create);

api.post("/login", userController.userLogin);

module.exports = api;
