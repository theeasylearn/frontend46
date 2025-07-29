/*
    Develope api to insert, update, delete, fetch all & particular contact

    use Get method to fetch all & particular contact

    use Post Method to insert new contact 

    use Delete method to delete existing contact 

    use Put method to delete existing contact 
*/
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

//define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

var data = []; //empty list/array
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
        response.send('input missing');
    }
    else {
        var temp = {
            'email': email,
            'mobile': mobile,
            'name': name,
            'detail': detail
        };
        data.push(temp);
        response.send('contact inserted....');
    }
    // console.log(email,mobile,name,detail);
});
//fetch all contacts 
app.get(ROUTE,function(request,response){
    response.json(data);
});
//delete specific contact 
//input : email (required)
app.delete(ROUTE,function(request,response){
    var email = request.body.email;
    console.log(email);
    
});


app.listen(5000);
console.log('ready to accept request');
