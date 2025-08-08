var express = require('express');
var { dbPromise } = require('./connection');
var bodyparser = require('body-parser');
var app = express();

//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

const ROUTE = "/system";

app.post(ROUTE, (request, response) => {
    var object = request.body;
    console.log(object);
    //insert as document
    dbPromise.then((database) => {
        database.collection('data').insertOne(object);
        response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'data saved' }]);
    });
});

// READ - Get all data
//localhost:5000/system
// READ - Give no of documents 
//localhost:5000/system?limit=3

app.get(ROUTE, (request, response) => {
    dbPromise.then((database) => {
        let input = request.query;
        if (input.limit === undefined) {
            database.collection('data').find({}).toArray((error, documents) => {
                if (error != null) {
                    response.json([{ 'error': 'error occured' }]);
                    console.log(error);
                }
                else {
                    documents.unshift({ 'error': 'no' }, { 'total': documents.length });
                    response.json(documents);
                }
            });
        }
        else {
            database.collection('data').find({}).limit(parseInt(input.limit)).toArray((error, documents) => {
                if (error != null) {
                    response.json([{ 'error': 'error occured' }]);
                    console.log(error);
                }
                else {
                    documents.unshift({ 'error': 'no' }, { 'total': documents.length });
                    response.json(documents);
                }
            });
        }
    })
});

// READ - Get a specific task by ID
app.get(ROUTE + ':id', (request, response) => {
});

// UPDATE - Update a task by ID
app.put(ROUTE, (request, response) => {
    var object = request.body;
    var condition = { name: object.name };
    var updateObject = { $set: { surname: object.surname, age: object.age, city: object.city } };
    dbPromise.then((database) => {
        database.collection('data').updateMany(condition, updateObject, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'data updated' }]);
            }
        });
    })
});
// DELETE - Delete a task by ID
app.delete(ROUTE, (request, response) => {
    var object = request.body;
    var condition = { name: object.name };
    dbPromise.then((database) => {
        database.collection('data').deleteOne(condition, function (error, result) {
            if (error != null) {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'data deleted' }]);
            }
        });
    });
});

app.listen(5000);
console.log('ready to accept requestuest');