var http = require('http');

//import local module 
var security = require('./lib/security.js');
function handleRequest(request,response)
{
    console.log('request is received...');
    //call getHashPassword function of secruity module(local module)
    let hash = security.getHashPassword('mango');
    let isPasswordMatch = security.comparePassword('%go@4^ewe','mango');
    console.log(isPasswordMatch);
    response.writeHead(200,{'content-type':'text/html'});
    response.write(hash);
    response.end();
}
//handleRequest function will execute for each and every request received by nodejs server
var server = http.createServer((request,response) => handleRequest(request,response));
const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});