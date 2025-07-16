var http = require('http');
var fs = require('fs');
var url = require('url');
//localhost:5000/delete_file?filename=apple.txt
var server = http.createServer(function (request, response) {
    console.log(request.url);
    let filename = "mystory.txt";
    let info = url.parse(request.url, true);
    var form = info.query; //return queryString as object
    console.log('url of the route', info.pathname);
    if (info.pathname === "/delete_file") {
        fs.unlink("apple.txt", function (error) {
            if (error == null)
                console.log('file has been deleted')
            else
                console.log('file could not be deleted');
        });
    }
    if (info.pathname === "/rename_file") {
        fs.rename("mango.txt","pinapple.txt", function (error) {
            if (error == null)
                console.log('file has been renamed')
            else
                console.log('file could not be renamed');
        });
    }
    let content = "task submitted";
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(content);
    response.end();
});
server.listen(5000);