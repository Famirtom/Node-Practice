##  Node-Practice

A small Node.js practice project demonstrating how to create an HTTP server and use the Lodash library for data manipulation.

##  Features

Basic HTTP server built with Node’s core http module

Routes returning JSON responses

Examples using Lodash functions:

_.find() → find one lesson by property

_.findLast() → find the last lesson matching a condition

_.filter() → find all lessons meeting a condition

_.shuffle() → randomize the lesson order

Query parameters to dynamically choose the operation (e.g. /result?type=findBy&location=London)

##  Example Endpoints

Route	Description

/lessons	Returns all lessons

/findLondon	Returns lesson in London

/findUnder100	First lesson with price < 100

/find100	All lessons with price < 100

/findLast	Last lesson with price < 100

/shuffle	Lessons in random order

/result?type=findBy&location=London	Dynamic search example

##  Installation
git clone https://github.com/Famirtom/Node-Practice.git
cd Node-Practice
npm install
node Myserver.js


Server runs by default on:

http://localhost:3000

##  Dependencies

lodash

 Author

Created by Famirtom as a Node.js learning exercise.
