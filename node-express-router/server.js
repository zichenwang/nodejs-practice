//get the initial required modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


//assign app to express and call app level methods
var app = express();
app.use(morgan('dev'));

//import the routers for the routes
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');
//assign the route to the routers
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);


//serve the static files from the public folder
app.use(express.static(__dirname + '/public'));

//set up the credentials for the server
var hostname = 'localhost';
var port = 3000;
//start the server
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});