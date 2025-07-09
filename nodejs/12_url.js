var http = require('http');
var url = require('url');
var routes = require('./lib/bus_routes');
var handleRequest = function (request, response) {
    console.log('new request has been received....');
    response.writeHead(200, { 'content-type': 'application/json' });
    //check url(routes)
    let info = url.parse(request.url, true);
    var queryString = info.query;
    let output = null;
    if (queryString === null)
        output = routes;
    else if (queryString.source !== undefined && queryString.destination != undefined) {

        console.log(queryString.source, queryString.destination);
        output = routes.filter((item) => {
            if (item.from === queryString.source && item.to === queryString.destination) {
                console.log(item);
                return item;
            }
        });
    }

    response.write(JSON.stringify(output));
    response.end();
}


var server = http.createServer((req, res) => handleRequest(req, res));
server.listen(5000);
console.log('ready to accept request');