const http = require('http');

// Create a server
http.createServer((request, response) => {

	// Sends a chunk of the response body
	response.write('Hello World!');

	// Signals the server that all of
	// the response headers and body
	// have been sent
	response.end();
}).listen(3000); // Server listening on port 3000

console.log("Server started on port 3000");