var http = require('http');

//import local module 
var con = require('./lib/dbconnector');
function handleRequest(request,response)
{
    //create object of Email class using e 
    var db = new con.DBConnector();
    db.insertRow();
    db.updateRow();
    db.deleteRow();
    db.fetchRow();
    response.writeHead(200,{'content-type':'text/html'});
    response.write('Object created successfully');
    response.end();
}
//handleRequest function will execute for each and every request received by nodejs server
var server = http.createServer((request,response) => handleRequest(request,response));

const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});