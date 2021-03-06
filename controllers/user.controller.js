"user strict"

function userTest(req,res){
	
	res.status(200).send({mensaje:"test userControllers"});
}

var Users = require("../models/users.model.js")
var bcrypt = require("bcrypt-nodejs");
var token = require("../token/token.js")

function create(req, res){

	var users = new Users();
	var params = req.body;
	// console.log(parmas);
	users.user = params.user;
	if (params.password){

		bcrypt.hash(params.password, null, null, function(error, hash){

			users.password = hash;

			if(params.password != null){
				
				(users).save((error, savedUser)=>{
					if(error){

						res.status(500).send({message:"Error saving the User"})

					}else{

						res.status(200).send({savedUser})
					}
				})
	
			}
		})
	}
}

function userLogin(req,res){

	var params = req.body;
	var user = params.user;
	var password = params.password;

	Users.findOne({user:user}, (error, userSelec)=>{

			if(error){

				res.status(500).send({message:"Error login the User"})

			}else{

				if(!user){

					res.status(404).send({message:"User does not exist"})
			
				}else{

					//res.status(200).send({userSelec});
					bcrypt.compare(password, userSelec.password, function(error, ok){

						if(ok){

							//res.status(200).send({userSelec});
							if(params.token){

								res.status(200).send({token: token.createToken(userSelec)})
							}

						}else{

							res.status(404).send({message:"User was not able to login"})

						}
					})
					
			}
		}
	})
}


module.exports ={
	userTest,
	create,
	userLogin
}