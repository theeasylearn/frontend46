var {MongoClient} = require('mongodb');
var url = "mongodb://127.0.0.1:27017";
var database = "frontend46";
var client = new MongoClient(url);
var dbPromise = client.connect().then(() =>{
    console.log('connection created...');
    return client.db(database);
}).catch((error) => {
    console.log(error);
});

module.exports = {dbPromise};