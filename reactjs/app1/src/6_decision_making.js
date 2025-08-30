// Develop Digital clock which will display Time & date.
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './clock.css';
//create object Date Library class
let today = new Date(); 
//create object
let current = {
    day:today.getDate(),
    month:today.getMonth()+1,
    year:today.getFullYear(),
    hour:today.getHours(),
    minute:today.getMinutes(),
    second:today.getSeconds(),
    weekday: today.getDay()
}

function getDateTime(now) {
    //use decision making statement if else to decide whether to show AM/PM after time 
    let ampm = '';
    if(now.hour<12)
    {
        ampm = 'AM';
    }
    else 
    {
        now.hour -= 12; 
        ampm = 'PM';
    }
    // alert(now.weekday);
    //use switch to decide name of day 
    let dayName = '';
    switch(now.weekday)
    {
        case 1:
            dayName = 'Monday';
        break;

        case 2:
            dayName = 'Tuesday';
        break;

        case 3:
            dayName = 'Wednesday';
        break;

        case 4:
            dayName = 'Thursday';
        break;

        case 5:
            dayName = 'Friday';
        break;

        case 6:
            dayName = 'Saturday';
        break;

        case 7:
            dayName = 'Sunday';
        break;
    }
    return (<div className="full-screen">
        <div className="time-card">
            <div className="date">{dayName} {now.day} / {now.month} / {now.year}</div>
            <div className="time">{now.hour}:{now.minute}:{now.second} {ampm}</div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(getDateTime(current)); //calling function which must return JSX
