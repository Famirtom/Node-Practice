var mustache = require("mustache");

var template = "My name is {{name}} I am {{age}} years old. I live in {{ city}}.";


var result = mustache.render(template,{
    name: "Tommaso",
    age: "30",
    city: "London"
});

console.log(result);