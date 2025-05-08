// 1st delete code which is reparative but keep it once 
// 2nd step code which is reparative, store it into variable 
// var row = `<tr>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//     </tr>`;
//3rd put this variable inside parent of html code which was cut     
// document.getElementById('tbody1').innerHTML = row;

//we need 5 such rows 
// document.getElementById('tbody1').innerHTML += row;
// document.getElementById('tbody1').innerHTML += row;
// document.getElementById('tbody1').innerHTML += row;
// document.getElementById('tbody1').innerHTML += row;
//user defined function

function getFirstDayOfWeek(year, month) {
    // month is 0-indexed: January = 0, December = 11
    const date = new Date(year, month, 1);
    let dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    return dayOfWeek;
}

//take year and month as input 
let year = parseInt(prompt("Enter year"));
let month = parseInt(prompt("Enter month (jan = 0, )"));
// Example: Get the day of week for May 2025
const dayOfWeek = getFirstDayOfWeek(year, month); // May is month 4 (0-indexed)

console.log(dayOfWeek); // e.g., 4 for Thursday

//here we observe that line no 73 to 76 is repetitive hence we put it in loop 
var day = 1;
for (let i = 1; i <= 6; i++) { //outer loop
    //here we again observe that td tag is also repetitive 
    let td = '';

    for (let j = 1, emptyCount = 1; j <= 7 && day <= 31; j++, emptyCount++) { //inner loop 
        if (emptyCount <= dayOfWeek && i == 1) {
            td = td + `<td></td>`;
        }
        else {
            td = td + `<td>${day}</td>`;
            day++;
        }
    }
    let row = `<tr>${td}</tr>`;
    document.getElementById('tbody1').innerHTML += row;
}