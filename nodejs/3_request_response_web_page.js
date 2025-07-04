var http = require('http');
var server = http.createServer(function (request, response) {
    console.log(request.url);
    let output = `<!DOCTYPE html><html><head><title>404 - Page Not Found</title></head><body><h1>404</h1><h2>Page Not Found</h2><p>Sorry, the page you are looking for does not exist.</p><p><a href="/">Return to Home</a></p></body></html>`;
    if (request.url === '/') {
        output = `<!DOCTYPE html><html><head><title>Sample Page</title></head><body><h1>Welcome to My Sample Page</h1><p>This is a simple HTML-only page.</p><ul><li>Point One</li><li>Point Two</li><li>Point Three</li></ul><p>Thank you for visiting!</p></body></html>`;
    }
    else if (request.url === '/aboutus') {
        output = `<!DOCTYPE html><html><head><title>About Us</title></head><body><h1>About Us</h1><p>Welcome to our website. We are passionate about delivering quality services to our customers.</p><h2>Our Mission</h2><p>To provide reliable and innovative solutions that empower individuals and businesses.</p><h2>Our Team</h2><ul><li>Sonu Sharma - Founder & CEO</li><li>Affan - Creative Director</li><li>Sarah Khan - Marketing Head</li></ul><p>We look forward to working with you!</p></body></html>`;
    }
    else if (request.url === '/contactus') {
        output = `<!DOCTYPE html><html><head><title>Contact Us</title></head><body><h1>Contact Us</h1><p>If you have any questions or need assistance, feel free to reach out.</p><h2>Our Contact Details</h2><p>Phone: +91 92298 88175</p><p>Email: info@flixmob.com</p><p>Address: Easylearn Academy, India</p><h2>Send Us a Message</h2><form><label>Name:</label><br><input type="text" name="name"><br><br><label>Email:</label><br><input type="email" name="email"><br><br><label>Message:</label><br><textarea name="message" rows="5" cols="30"></textarea><br><br><input type="submit" value="Send"></form></body></html>`;
    }
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(output);
    response.end();
});
server.listen(5000);