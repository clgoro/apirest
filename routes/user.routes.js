"use strict"

var express = require("express");

var userController = require("../controllers/user.controller.js");

var api = express.Router();

var md_aut = require("../token/aut.js")

api.get("/testsc", md_aut.authentication, userController.userTest);

api.post("/create", userController.create);

api.post("/login", userController.userLogin);

module.exports = api;
