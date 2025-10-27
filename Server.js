var http = require("http");
var _ = require("lodash"); // import lodash

// lessons data
const lessons =[
    {"topic": 'computing', "location": 'London' , "price": 100},
    {"topic": 'math', "location": 'Manchester', "price": 150},
    {"topic": 'English', "location": 'Brixton' , "price": 80},
    {"topic": 'History', "location": 'Wembly', "price": 70}
];

// Fuction for requests
function requestHandler(request, response){
    const url = new URL(request.url, "http://localhost:3000");
    const path = url.pathname;

    if ( path =="/lessons"){
        response.end(JSON.stringify(lessons)); //response with the data inside
    } else if ( path =="/findLondon") {
        const result =_.find(lessons, {location: 'London'})
        response.end(JSON.stringify(result));
    } else if ( path === "/findUnder100"){
        const result = _.find(lessons, l => l.price < 100);
        response.end(JSON.stringify(result));
    } else if ( path === "/find100"){
        const result = _.filter(lessons, l => l.price <100);
        response.end(JSON.stringify(result));
    } else if ( path === "/findLast"){
        const result =_.findLast(lessons, l => l.price < 100);
        response.end(JSON.stringify(result)); 
    } else if ( path === "/shuffle"){
        const result = _.shuffle(lessons);
        response.end(JSON.stringify(result));
    } else if ( path === "/result"){
        const type = url.searchParams.get("type");
        console.log("type", type);
        response.end(JSON.stringify({ message: `You requested type: ${type}` }));
    } else {
        response.end(JSON.stringify({ message: "Go to /lessons for lessons infomationor go to /findLondon to see lessons in London."
        }));
    }
}

_.find(lessons, {location: 'London'});

const result = _.find(lessons, {location: 'London'});
//create the server
var server= http.createServer(requestHandler);

server.listen(3000);

console.log("Server at http://localhost:3000");