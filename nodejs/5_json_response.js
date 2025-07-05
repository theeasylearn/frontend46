var http = require('http');
const products = [
    {
      name: "Laptop",
      color: "Silver",
      details: "15-inch screen, 8GB RAM, 512GB SSD, Intel i7 Processor",
      price: 1200.00
    },
    {
      name: "Smartphone",
      color: "Midnight Black",
      details: "6.5-inch OLED, 128GB storage, 12MP camera, 5G connectivity",
      price: 899.99
    },
    {
      name: "Headphones",
      color: "Blue",
      details: "Noise-cancelling, Bluetooth 5.0, 30-hour battery life",
      price: 199.99
    },
    {
      name: "Smartwatch",
      color: "Rose Gold",
      details: "Fitness tracking, heart rate monitor, 2-day battery life",
      price: 249.99
    },
    {
      name: "Backpack",
      color: "Black",
      details: "Waterproof, multiple compartments, adjustable straps",
      price: 49.99
    },
    {
      name: "Tablet",
      color: "Space Gray",
      details: "10.2-inch display, 64GB storage, A12 Bionic chip",
      price: 329.00
    },
    {
      name: "Bluetooth Speaker",
      color: "Red",
      details: "Portable, waterproof, 20-hour battery life",
      price: 69.99
    },
    {
      name: "Smart TV",
      color: "Black",
      details: "55-inch 4K Ultra HD, Smart TV with built-in apps, Dolby Vision",
      price: 699.99
    },
    {
      name: "Electric Kettle",
      color: "Stainless Steel",
      details: "1.7L capacity, automatic shut-off, boil-dry protection",
      price: 29.99
    },
    {
      name: "Gaming Mouse",
      color: "RGB Black",
      details: "High-precision 16,000 DPI, customizable buttons, ergonomic design",
      price: 59.99
    }
  ];
//localhost:5000 return all objects
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'application/json' });
    let url = request.url;
    let output = JSON.stringify(products);
    response.write(output);
    response.end();
});
const portno = 5000; 
server.listen(portno,function(){
   console.log('server is started....');
});