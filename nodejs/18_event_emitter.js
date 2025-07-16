var http = require('http');
var server = http.createServer(function (request, response) {
    em.emit("error", "some critical error occured...");
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('Thank you for contacting us');
    response.end();
});

server.listen(5000);