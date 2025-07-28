const express = require('express');
const app = express();

app.get("/add/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let addition = parseInt(num1) + parseInt(num2);
    res.send("addition = " + addition);
});

app.get("/sub/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let subtraction = parseInt(num1) - parseInt(num2);
    res.send("subtraction = " + subtraction);
});

app.get("/mul/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let mulitplication = parseInt(num1) * parseInt(num2);
    res.send("mulitplication = " + mulitplication);
});

app.get("/div/:num1/:num2", (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let division = parseInt(num1) / parseInt(num2);
    res.send("subtraction = " + division);
});


app.use((req, res) => {
    res.status(404).send("no such route exists...");
});

app.listen(5000, () => {
    console.log('ready to accept request....');
});