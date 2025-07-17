var http = require('http');
//import local module
var my_event = require('./lib/error_handling');

var server = http.createServer(function (request, response) {
    my_event.em.emit("error", "some critical error occured...");
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('Thank you for contacting us');
    response.end();
});

server.listen(5000);