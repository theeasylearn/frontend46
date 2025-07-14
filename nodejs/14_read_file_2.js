var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log(request.url);
    let filename = "site/404.html";
    if (request.url === "/" || request.url === "/home")
        filename = "site/home.html";
    else if (request.url === "/aboutus")
        filename = "site/aboutus.html";
    else if (request.url === "/products")
        filename = "site/products.html";
    else if (request.url === "/services")
        filename = "site/services.html";
    else if (request.url === "/contactus")
        filename = "site/contactus.html";
    let content = fs.readFileSync(filename);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(content);
    response.end();
});
server.listen(5000);