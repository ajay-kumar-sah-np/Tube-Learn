

var mongoose=require('mongoose');
var assert=require('assert');
var url="mongodb+srv://AJAY:AJAY12345@cluster0.ot4k6sg.mongodb.net/?retryWrites=true&w=majority";
//password AJAY12345
// connection code
module.exports=mongoose.connect(
	url,
	{
		useNewUrlParser:true,
		useUnifiedTopology:true,
		useCreateIndex:true
	},
	function(err,link)
	{
		if(err)
			console.log(err);
		
		console.log("connection success");
		

	}
	);
