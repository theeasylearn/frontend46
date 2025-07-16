var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {
    console.log(request.url);
    let filename = "mystory.txt";
    let info = url.parse(request.url, true);
    var form = info.query; //return queryString as object
    console.log('url of the route',info.pathname);
    if (info.pathname === "/submit_story") {
        //write data into file 
        let fileContent = "Name " + form.name + "\n Email " + form.email + "\n mobile " + form.mobile + "\n story = " + form.story; 
        fs.writeFile(filename,fileContent,function(error){
            if(error==null)
                console.log('file has been created successfully');
        });
        let content = "story submitted successfully";
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(content);
        response.end();
    }
});
server.listen(5000);