var express = require('express');
var {dbPromise} = require('./connection');
var bodyparser = require('body-parser');
var app = express();

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
const ROUTE = "system/";

app.post(ROUTE, (req, res) => {
    
});

// READ - Get all tasks
app.get(ROUTE, (req, res) => {
    
});

// READ - Get a specific task by ID
app.get(ROUTE+ ':id', (req, res) => {
    ;
});

// UPDATE - Update a task by ID
app.put(ROUTE, (req, res) => {
    
});
// DELETE - Delete a task by ID
app.delete(ROUTE, (req, res) => {
 
});
app.listen(5000);
console.log('ready to accept request');