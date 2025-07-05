var http = require('http');
//import local module 
var datetime = require("./lib/datetime");
//localhost:5000 return all objects
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/html' });
    let output = datetime.today() + " " + datetime.time();
    response.write(output);
    response.end();
});
const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});