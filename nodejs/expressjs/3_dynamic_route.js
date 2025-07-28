const express = require('express');
const app = express();

// Addition 
//http://localhost:5000/add/10/3

app.get('/add{/:num1}{/:num2}', (req, res) => {

    let num1 = req.params.num1;
    let num2 = req.params.num2;

    if (num1 == undefined || num2 == undefined) {
        return res.send(`num1 = ${num1 || 'not provided'} num2 = ${num2 || 'not provided'}`);
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send('Invalid input: Both parameters must be valid numbers');
    }

    const result = num1 + num2;
    res.send(`Addition = ${result}`);
});
// Subtraction route
app.get('/sub{/:num1}{/:num2}', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    // Check if parameters are provided
    if (!num1 && !num2) {
        return res.send('num1 = not provided num2 = not provided');
    }
    if (num1 && !num2) {
        return res.send(`num1 = ${num1} num2 = not provided`);
    }

    // Convert to numbers and validate
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input: Both parameters must be valid numbers');
    }

    const result = num1 - num2;
    res.send(`Subtraction = ${result}`);
});

// Multiplication route
app.get('/mul{/:num1}{/:num2}', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    if (!num1 && !num2) {
        return res.send('num1 = not provided num2 = not provided');
    }
    if (num1 && !num2) {
        return res.send(`num1 = ${num1} num2 = not provided`);
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input: Both parameters must be valid numbers');
    }

    const result = num1 * num2;
    res.send(`Multiplication = ${result}`);
});

// Division route
app.get('/div{/:num1}{/:num2}', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;

    if (!num1 && !num2) {
        return res.send('num1 = not provided num2 = not provided');
    }
    if (num1 && !num2) {
        return res.send(`num1 = ${num1} num2 = not provided`);
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid input: Both parameters must be valid numbers');
    }

    if (num2 === 0) {
        return res.status(400).send('Error: Division by zero is not allowed');
    }

    const result = num1 / num2;
    res.send(`Division = ${result}`);
});
app.use((req, res) => {
    res.status(404).send("No such route exists...");
});

app.listen(5000, () => {
    console.log('Server ready to accept requests on port 5000...');
});