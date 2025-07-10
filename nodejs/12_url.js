//this example demonstrate how to fetch data from list using queryString(input parameter)

//to get all bus routes 
// http://localhost:5000/

//to get bus routes for given source & destination 
//http://localhost:5000/?source=bhavnagar&destination=surat

//get bus routes for given source & destination & below given price
//http://localhost:5000/?source=bhavnagar&destination=surat&price=400

var http = require('http');
var url = require('url');
var routes = require('./lib/bus_routes');
var handleRequest = function (request, response) {
    console.log('new request has been received....');
    response.writeHead(200, { 'content-type': 'application/json' });
    //check url(routes)
    let info = url.parse(request.url, true);
    var queryString = info.query; //return queryString as object
    let output = routes;
    /* 
        {
            source:'bhavnagar',
            destination:'surat',
            price:'400'
        }
    */
    if(queryString.source !== undefined && queryString.destination !== undefined && queryString.price!==undefined)
    {
        output = routes.filter((item) => {
            if(item.from === queryString.source && item.to === queryString.destination && item.price<parseInt(queryString.price))
            {
                return item;
            }    
        })
    }    
    
    else if (queryString.source !== undefined && queryString.destination != undefined) {

        console.log(queryString.source, queryString.destination);
        output = routes.filter((item) => {
            if (item.from === queryString.source && item.to === queryString.destination) {
                console.log(item);
                return item;
            }
        });
    }
    output.unshift({'total':output.length});
    response.write(JSON.stringify(output));
    response.end();
}


var server = http.createServer((req, res) => handleRequest(req, res));
server.listen(5000);
console.log('ready to accept request');