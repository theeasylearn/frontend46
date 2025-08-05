var http = require('http');

//import local module 
var e = require('./email');
function handleRequest(request,response)
{
    //create object of Email class using e 
    var receiver = 'theeasylearn@gmail.com';
    var subject = 'password recovery email';
    var password = 'abc@123'
    var message = `your new password is ${password}`
    var sender = new e.Email(receiver,subject,message);
    sender.send();
    response.writeHead(200,{'content-type':'text/html'});
    response.write('mail sent');
    response.end();
}
//handleRequest function will execute for each and every request received by nodejs server
var server = http.createServer((request,response) => handleRequest(request,response));

const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});