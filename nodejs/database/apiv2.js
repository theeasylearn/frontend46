var express = require('express');
var bodyparser = require('body-parser');
var connection = require("./connection");
//import contact.js 
var contact = require('./contact');
var app = express();
//define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
const ROUTE = "/contact";

//use Post Method to insert new contact 
//input : email,mobile,name,detail
//all input is required
app.post(ROUTE, (request,response) => contact.insert(request,response));

//http://localhost:5000/contact
//fetch all contacts 

// fetch all contact whose email is abc
//http://localhost:5000/contact?email=abc

//http://localhost:5000/contact?id=1
// fetch all contact whose id = 1
app.get(ROUTE,(request,response) => contact.select(request,response));

//delete specific contact 
//input : email (required)
app.delete(ROUTE,(request,response) => contact.remove(request,response));

//update specific contact
//input : email, mobile, name, detail
app.put(ROUTE, (request,response) => contact.update(request,response));
app.listen(5000);
console.log('ready to accept request');
