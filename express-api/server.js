// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
var dtArr = [{index:'m',segments:['Male','Mark'],values:['aa','bb','cc','dd']}, 
			 {index:"f",segments:['Female'],values:['bb','cc','dd','ff']},
			 {index:"g",segments:['Group','Gender'],values:['ee','gg','hh','ii']}];
			 
var jsonAll = '"output":[{"index":"m","segments":["Male","Mark"],"values":["aa","bb","cc","dd"]} ]';
var output;
router.get('/user/:id', function(req, res) {

	if(req.params.id === "all"){
		output = JSON.stringify(dtArr[0]);
	}
	
    res.json(output);   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
