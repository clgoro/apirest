"user strict"

function galleriesTest(req,res){
	
	res.status(200).send({mensaje:"test galleriesControllers"});
}

module.exports ={
	galleriesTest
}