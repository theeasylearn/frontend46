var http = require('http');

//import local module 
var site = require('./lib/site_detail');
function handleRequest(request,response)
{
    console.log('request is received...');
    response.writeHead(200,{'content-type':'text/html'});
    let output = site.center + "<br/>" + site.address + "<br/>" + site.city + "<br/>" + site.mobile;
    response.write(output);
    response.end();
}
//handleRequest function will execute for each and every request received by nodejs server
var server = http.createServer((request,response) => handleRequest(request,response));
const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});