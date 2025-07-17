var fs = require('fs');
var now = require('./datetime');
var event = require('events');
var em = new event.EventEmitter();

//create event listner for error
em.addListener("error", (data) => {
    console.log('I will store this event data into file....');
    var fileContent = now.today() + " " + now.time() + " " + data + "\n";
    fs.appendFile('error.log', fileContent, function (error) {

    });
});

em.on("error", (data) => {
    console.log('I will count no of events. if no of events exceed 5 i will stop system');
});
//required
module.exports.em = em;