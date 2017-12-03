"user strict"

function slidesTest(req,res){
	
	res.status(200).send({mensaje:"test slidesControllers"});
}

module.exports ={
	slidesTest
}