var express = require('express');
var bodyparser = require('body-parser');
var connection = require("./connection");
var app = express();
//define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
const ROUTE = "/contact";
//use Post Method to insert new contact 
//input : email,mobile,name,detail
//all input is required
app.post(ROUTE, function (request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = `INSERT INTO contact(name, email, mobile, detail) VALUES ('${name}','${email}','${mobile}','${detail}')`;
        connection.con.query(sql, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'message': 'contact inserted....' }]);
            }
        });
    }
    // console.log(email,mobile,name,detail);
});
//http://localhost:5000/contact
//fetch all contacts 

//http://localhost:5000/contact?email=abc
// fetch all contact whose email is abc

//http://localhost:5000/contact?name=abc
// fetch all contact whose name is abc

//http://localhost:5000/contact?mobile=123
// fetch all contact whose mobile is 123

app.get(ROUTE, function (request, response) {
    let { name, email, mobile } = request.query;
    console.log(name, email, mobile);
    if (name === undefined && email === undefined && mobile === undefined) {
    }

});

//delete specific contact 
//input : email (required)
app.delete(ROUTE, function (request, response) {
    var email = request.body.email;
    if (email === undefined) {
        response.send('input missing');
    }
    else {
        console.log(email); //rahul.patel@example.com

    }

});

//update specific contact
//input : email, mobile, name, detail
app.put(ROUTE, function (request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.send('input missing');
    }
    else {

    }
});
app.listen(5000);
console.log('ready to accept request');
