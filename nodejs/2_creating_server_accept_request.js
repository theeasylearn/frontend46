var http = require('http');
var count = 0;
var server = http.createServer(function(request,response){
    count++;
    console.log("I have acceted request. Thank  you",count);
});

//must listen on some port
var port = 5000;
server.listen(5000);