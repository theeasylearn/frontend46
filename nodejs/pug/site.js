var express = require('express')
var app = express();
app.set("view engine", "pug");
app.set("views", "views");

//crete route 
app.get("/one", function (request, response) {
    response.render('one')
});

//create route for each and every pug 
app.get("/two", function (request, response) {
    //redirect request to views/two.pug file 
    response.render('two');
});

app.get("/three", function (request, response) {
    //redirect request to views/three.pug file 
    response.render('three');
});


app.get("/four", function (request, response) {
    //redirect request to views/three.pug file 
    response.render('four');
});

app.get("/five", function (request, response) {
    //redirect request to views/three.pug file 
    response.render('five');
});

app.get("/office/delhi", function (request, response) {
    response.render('six', {
        name: 'Delhi Branch',
        address: '125, Kunj vihar, CG Road',
        mobile: 1234567890,
        email: 'delhi@theeasylearn.com'
    });
});


app.get("/office/banglore", function (request, response) {
    response.render('six', {
        name: 'banglore Branch',
        address: 'vasant vihar, stadium road, sector 8',
        mobile: 2233445566,
        email: 'banglore@theeasylearn.com'
    });
});


app.get("/office/calcutta", function (request, response) {
    response.render('six', {
        name: 'calcutta Branch',
        address: '225, tagore hall, hawar bridge',
        mobile: 9988776655,
        email: 'calcutta@theeasylearn.com'
    });
});

app.get("/office/bombay", function (request, response) {
    response.render('six', {
        name: 'bombay Branch',
        address: 'juhu, marine drive, near railway station',
        mobile: 55667788,
        email: 'bombay@theeasylearn.com'
    });
});

app.get("/eight", function (request, response) {
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    response.render("seven", {
        states: indianStates
    });
});

app.get("/seven", function (request, response) {
    const richestIndians = ["Mukesh Ambani", "Gautam Adani", "Shiv Nadar", "Savitri Jindal & Family", "Dilip Shanghvi", "Cyrus Poonawalla", "Kumar Mangalam Birla", "Lakshmi Mittal", "Radhakishan Damani", "Kushal Pal Singh", "Uday Kotak", "Ravi Jaipuria", "Azim Premji", "Mangal Lodha", "Pankaj Patel", "Sunil Mittal", "Rekha Jhunjhunwala", "Hasmukh Chudgar & family", "M. A. Yusuff Ali", "Gopikishan Damani & family"];

    //render it to eight.pug file and display it as bootstrap table with position and name 
});

app.get("/nine", function (request, response) {
    const cricketer = {
        name: "Virat Kohli",
        age: 36,
        country: "India",
        role: "Batsman",
        battingStyle: "Right-hand bat",
        bowlingStyle: "Right-arm medium",
        matchesPlayed: 500,
        totalRuns: 25000,
        centuries: 80,
        isCaptain: false
    };

    console.log(cricketer);

    response.render('nine', {
        player: cricketer
    });
});

app.listen(5000);
console.log('ready to accept request');

