var http = require('http');

//import local module 
var con = require('./lib/connection_detail');
function handleRequest(request,response)
{
    console.log('request is received...');
    response.writeHead(200,{'content-type':'text/html'});
    let output = con.username + " " + con.password + " " + con.database + " " + con.portno + " " + con.name;
    response.write(output);
    response.end();
}
//handleRequest function will execute for each and every request received by nodejs server
var server = http.createServer((request,response) => handleRequest(request,response));

const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});