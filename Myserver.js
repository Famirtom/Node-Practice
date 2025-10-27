var http = require("http");


// defines a fuction that'll handle incoming HTTP requests
function requestHandler(request, response) {
    console.log("incoming request to: " + request.url);
    if (request.url === "/"){
        response.end("Walcome to the homepage!");
    }else if (request.url === "/hello"){
    response.end("Hi, how are you?");
    }else if (request.url === "/info"){
    response.end("This is a node.js server!");
    }else {
    response.end("page not found!" + request.url);
    }
}

// Create a server that uses  your fuction to handle requests
var server = http.createServer(requestHandler);

// Starts the server listening on port 3000
server.listen(3000);

console.log("Serve at http://localhost:3000");