/*
    Develope api to insert, update, delete, fetch all & particular contact

    use Get method to fetch all & particular contact

    use Post Method to insert new contact 

    use Delete method to delete existing contact 

    use Put method to delete existing contact 
*/
var express = require('express');
var bodyparser = require('body-parser');
var app = express();

//define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

var data = [
    {
        email: "john.doe@example.com",
        mobile: "9876543210",
        name: "John Doe",
        detail: "Interested in web development."
    },
    {
        email: "jane.smith@example.com",
        mobile: "9123456780",
        name: "Jane Smith",
        detail: "Looking for UI/UX design role."
    },
    {
        email: "rahul.patel@example.com",
        mobile: "8899776655",
        name: "Rahul Patel",
        detail: "Experienced in frontend technologies."
    },
    {
        email: "meera.kumar@example.com",
        mobile: "9988776655",
        name: "Meera Kumar",
        detail: "Wants to join the AI research team."
    },
    {
        email: "alex.brown@example.com",
        mobile: "9345678901",
        name: "Alex Brown",
        detail: "Full stack developer with 5 years of experience."
    },
    {
        email: "sunita.shah@example.com",
        mobile: "9090909090",
        name: "Sunita Shah",
        detail: "Recently completed cloud certification."
    },
    {
        email: "mohit.verma@example.com",
        mobile: "8888999900",
        name: "Mohit Verma",
        detail: "Interested in DevOps and CI/CD pipelines."
    },
    {
        email: "nisha.jain@example.com",
        mobile: "9012345678",
        name: "Nisha Jain",
        detail: "Strong in database and backend technologies."
    },
    {
        email: "arjun.mehta@example.com",
        mobile: "9801234567",
        name: "Arjun Mehta",
        detail: "Working on machine learning projects."
    },
    {
        email: "tara.singh@example.com",
        mobile: "9870012345",
        name: "Tara Singh",
        detail: "Looking for internship opportunities."
    }
];

const ROUTE = "/contact";
//use Post Method to insert new contact 
//input : email,mobile,name,detail
//all input is required
app.post(ROUTE, function (request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.send('input missing');
    }
    else {
        var temp = {
            'email': email,
            'mobile': mobile,
            'name': name,
            'detail': detail
        };
        data.push(temp);
        response.send('contact inserted....');
    }
    // console.log(email,mobile,name,detail);
});
//http://localhost:5000/contact
//fetch all contacts 

//http://localhost:5000/contact?email=abc
// fetch all contact whose email is abc

//http://localhost:5000/contact?name=abc
// fetch all contact whose name is abc

//http://localhost:5000/contact?mobile=123
// fetch all contact whose mobile is 123

app.get(ROUTE, function (request, response) {
    let {name,email,mobile} = request.query;
    console.log(name,email,mobile);
    if(name === undefined && email === undefined && mobile === undefined)
    {
        response.json(data);
    }
    
});

//delete specific contact 
//input : email (required)
app.delete(ROUTE, function (request, response) {
    var email = request.body.email;
    if (email === undefined) {
        response.send('input missing');
    }
    else {
        console.log(email); //rahul.patel@example.com
        var isFound = false;
        var templist = data.filter((item) => {
            if (email !== item.email) {
                return item;
            }
            else {
                isFound = true;
            }
        });
        if (isFound === true) {
            data = templist;
            response.send('contact has been deleted');
        }
        else {
            response.send('email not found');
        }
    }

});

//update specific contact
//input : email, mobile, name, detail
app.put(ROUTE, function (request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.send('input missing');
    }
    else 
    {
        var isFound = false;
        data.forEach((item,index) => {
            if(item.email === email)
            {
                item.mobile = mobile;
                item.detail = detail;
                item.name = name;
                isFound = true;
            }    
        });
        if(isFound === true)
            response.send('data updated successfully');
        else 
            response.send('email not found');
    }
});
app.listen(5000);
console.log('ready to accept request');
