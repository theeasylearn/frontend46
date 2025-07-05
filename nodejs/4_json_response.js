var http = require('http');
var center = {

    name: 'the easy learn',
    mobile: 1234567890,
    email: 'theeasylearn@gmail.com',
    lang: 'nodejs'
}
var mobile = {
    name: 'product1',
    price: 12000,
    details: [34.4, 'black', 'lightweight']
}
var laptop = {
    name: 'product2',
    price: 12000,
    details: [34.4, 'red', 'lightweight']
}
var headphone = {
    name: 'product3',
    price: 12000,
    details: [34.4, 'green', 'lightweight']
}
//localhost:5000 return detail about center 
//localhost:5000/mobile return mobile object
//localhost:5000/laptop return laptop object
//localhost:5000/headphone return headphone object
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'application/json' });
    let url = request.url;
    let output = JSON.stringify(center);
    if(url === '/') //root
        output = JSON.stringify(center);
    else if(url === '/mobile')
        output = JSON.stringify(mobile);
    else if(url === '/laptop')
        output = JSON.stringify(laptop);
    else if(url === '/headphone')
        output = JSON.stringify(headphone);
    
    response.write(output);
    response.end();
});
const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});