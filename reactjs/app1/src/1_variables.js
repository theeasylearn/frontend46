import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
//here output variable is JSX
var name = "THE EASYLEARN ACADEMY";
var pincode = 364001;
var city = "Bhavnagar";
var output = (<div>
    <h1>first example in reactjs</h1>
    <p>we have just started learning reactjs @ {name} <br/> {city} {pincode}</p>
    <b>Happy Coding</b>
</div>)
root.render(output);
