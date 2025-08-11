var express = require('express')
var app = express();
app.set("view engine","pug");
app.set("views","views");

//crete route 
app.get("/one",function(request,response){
    response.render('one')
});

//create route for each and every pug 
app.get("/two",function(request,response){
    //redirect request to views/two.pug file 
    response.render('two');
});

app.get("/three",function(request,response){
    //redirect request to views/three.pug file 
    response.render('three');
});


app.get("/four",function(request,response){
    //redirect request to views/three.pug file 
    response.render('four');
});

app.get("/five",function(request,response){
    //redirect request to views/three.pug file 
    response.render('five');
});

app.listen(5000);
console.log('ready to accept request');

