var express = require('express');
var connection = require("./connection");
var app = express();
var bodyparser = require('body-parser');
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
        var sql = `INSERT INTO contact(name, email, mobile, detail) VALUES (?,?,?,?)`;
        var data = [name, email, mobile, detail];
        //var sql = `INSERT INTO contact(name, email, mobile, detail) VALUES ('${name}','${email}','${mobile}','${detail}')`;
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact inserted....' }]);
            }
        });
    }
    // console.log(email,mobile,name,detail);
});


//http://localhost:5000/contact
//fetch all contacts 

// fetch all contact whose email is abc
//http://localhost:5000/contact?email=abc

//http://localhost:5000/contact?id=1
// fetch all contact whose id = 1

app.get(ROUTE, function (request, response) {
    //object destructring
    let { id, email } = request.query;
    console.log(id, email);
    let sql;
    if (id === undefined && email === undefined) {
        sql = "select * from contact order by id desc";
        data = [];
    }
    else if (id !== undefined) {
        sql = "select * from contact where id=?";
        data = [id];
    }
    else if (email !== undefined) {
        sql = "select * from contact where email=?";
        data = [email];
    }
    connection.con.query(sql, data, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            if (result.length === 0) {
                response.json([{ 'error': 'no' }, { 'total': 0 }]);
            }
            else {
                response.json(result);
            }
        }
    })
});

//delete specific contact 
//input : email (required)
app.delete(ROUTE, function (request, response) {
    var email = request.body.email;
    if (email === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = "delete from contact where email=?";
        var data = [email];
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.affectedRows > 0)
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact deleted....' }]);
                else
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
            }
        })
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
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = "UPDATE contact SET name=?,mobile=?,detail=? WHERE email=?";
        var data = [name, mobile, detail, email];
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.affectedRows > 0)
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact updated....' }]);
                else
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
            }
        });
    }
});
app.listen(5000);
console.log('ready to accept request');
