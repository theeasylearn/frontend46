var express = require('express');
// example of accept request on route using 4 main methods
const PRODUCT = '/product';

var app = express();
//localhost:5000/product
//method get 

app.get(PRODUCT,function(request,response){
    response.send('get method request received for ' + PRODUCT);
});


//localhost:5000/product
//method post 
app.post(PRODUCT,function(request,response){
    response.send('post method request received for ' + PRODUCT);
});

//localhost:5000/product
//method put 
app.put(PRODUCT,function(request,response){
    response.send('put method request received for ' + PRODUCT);
});

//localhost:5000/product
//method delete 
app.delete(PRODUCT,function(request,response){
    response.send('delete method request received for ' + PRODUCT);
});

app.listen(5000);
console.log('ready to accept request');
