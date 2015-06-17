// get the http module:
var http = require('http');
// fs module allow us to read and write content for responses!!
var fs = require('fs');
// require path:
var path = require('path');
// require static module:
var static_contents = require('./modules/static.js');
// creating a server using http module:
server = http.createServer(function (request, response){
	static_contents(request, response);
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log('Running on localhost at port 6789');



// NOTES about var server = http.createServer(function (request, response){...}
	// 1: Any request made to this web server gets passed into the callback.
	// 2: If the request matches one of the response patterns we built into the server, we will prepare and serve the associated response.
	// 3: If the request doesn't match, we will send back an error to the client.