var http = require('http');

//import local module 
var e = require('./lib/email');
function handleRequest(request,response)
{
    //create object of Email class using e 
    var sender = new e.Email('theeasylearn@gmail.com','this is mail subject','this is my message content');
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