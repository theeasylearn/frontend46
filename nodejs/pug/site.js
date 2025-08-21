var express = require('express');
var path = require('path');
var connection = require("./connection");

// below 3 lines required to access data submitted by post method
var bodyparser = require('body-parser');
//define middleware 
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, 'public')));
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

    //console.log(cricketer);

    response.render('nine', {
        player: cricketer,
    });


});

app.get("/ten", function (request, response) {
    const teamPlayers = [
        {
            name: "Rohit Sharma",
            age: 38,
            country: "India",
            role: "Batsman",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm offbreak",
            matchesPlayed: 450,
            totalRuns: 19000,
            centuries: 50,
            isCaptain: true
        },
        {
            name: "Hardik Pandya",
            age: 32,
            country: "India",
            role: "All-rounder",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast-medium",
            matchesPlayed: 280,
            totalRuns: 8000,
            centuries: 12,
            isCaptain: false
        },
        {
            name: "Yashasvi Jaiswal",
            age: 23,
            country: "India",
            role: "Batsman",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Legbreak",
            matchesPlayed: 50,
            totalRuns: 1500,
            centuries: 2,
            isCaptain: false
        },
        {
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
        },
        {
            name: "Suryakumar Yadav",
            age: 34,
            country: "India",
            role: "Batsman",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm medium",
            matchesPlayed: 150,
            totalRuns: 4000,
            centuries: 3,
            isCaptain: false
        },
        {
            name: "Rishabh Pant",
            age: 27,
            country: "India",
            role: "Wicketkeeper-batsman",
            battingStyle: "Left-hand bat",
            bowlingStyle: "—",
            matchesPlayed: 150,
            totalRuns: 5000,
            centuries: 5,
            isCaptain: false
        },
        {
            name: "Sanju Samson",
            age: 31,
            country: "India",
            role: "Wicketkeeper-batsman",
            battingStyle: "Right-hand bat",
            bowlingStyle: "—",
            matchesPlayed: 120,
            totalRuns: 3500,
            centuries: 2,
            isCaptain: false
        },
        {
            name: "Shivam Dube",
            age: 31,
            country: "India",
            role: "All-rounder",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Right-arm medium",
            matchesPlayed: 60,
            totalRuns: 1200,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Ravindra Jadeja",
            age: 36,
            country: "India",
            role: "All-rounder",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm orthodox",
            matchesPlayed: 350,
            totalRuns: 6000,
            centuries: 3,
            isCaptain: false
        },
        {
            name: "Axar Patel",
            age: 31,
            country: "India",
            role: "All-rounder",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm orthodox",
            matchesPlayed: 150,
            totalRuns: 2000,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Kuldeep Yadav",
            age: 30,
            country: "India",
            role: "Bowler",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm wrist spin",
            matchesPlayed: 120,
            totalRuns: 500,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Yuzvendra Chahal",
            age: 34,
            country: "India",
            role: "Bowler",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm legbreak",
            matchesPlayed: 150,
            totalRuns: 400,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Arshdeep Singh",
            age: 26,
            country: "India",
            role: "Bowler",
            battingStyle: "Left-hand bat",
            bowlingStyle: "Left-arm fast-medium",
            matchesPlayed: 80,
            totalRuns: 200,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Jasprit Bumrah",
            age: 32,
            country: "India",
            role: "Bowler",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            matchesPlayed: 310,
            totalRuns: 2000,
            centuries: 0,
            isCaptain: false
        },
        {
            name: "Mohammed Siraj",
            age: 31,
            country: "India",
            role: "Bowler",
            battingStyle: "Right-hand bat",
            bowlingStyle: "Right-arm fast",
            matchesPlayed: 120,
            totalRuns: 300,
            centuries: 0,
            isCaptain: false
        }
    ];
    //console.log(cricketer);
    response.render('ten', {
        players: teamPlayers,
    });
});

app.get("/site", function (request, response) {
    // Define SQL queries
    var feedbackSql = "select message, name from feedback order by id desc";
    var menuSql = "select * from menu order by id desc";

    // Execute both queries in parallel
    Promise.all([
        new Promise((resolve, reject) => {
            connection.con.query(feedbackSql, function (error, result) {
                if (error) reject(error);
                resolve(result);
            });
        }),
        new Promise((resolve, reject) => {
            connection.con.query(menuSql, function (error, result) {
                if (error) reject(error);
                resolve(result);
            });
        })
    ])
        .then(([feedbackResult, menuResult]) => {
            // Render the template with both datasets
            response.render('site', {
                testimonials: feedbackResult,
                menu: menuResult
            });
        })
        .catch(error => {
            console.error('Error executing queries:', error);
            response.status(500).send('Internal Server Error');
        });
});

app.post("/site", function (request, response) {
    
    var fullname = request.body.fullname;
    var email = request.body.email;
    var message = request.body.message;

    console.log(fullname,email,message);
    // create sql command
    var sql = `INSERT INTO inquiry(name, email, detail) VALUES (?,?,?)`;
    var data = [fullname,email,message];

    connection.con.query(sql,data,function(error,result){
        if(error)
            response.send('oops something went wrong, contact admin');
        else 
        {
            response.redirect('/site');
        }
    });
});


app.get("/aboutus",function(request,response){
    response.render("aboutus");
});

app.get("/contactus",function(request,response){
    response.render("contactus");
});

app.get("/pricing",function(request,response){
    response.render("pricing");
});

app.listen(5000);
console.log('ready to accept request');

