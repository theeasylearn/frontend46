// function in nodejs
function printDate()
{
    //create date class object
    let current = new Date();
    let today = current.getDate() + "/" + (current.getMonth()+ 1) + "/" + current.getFullYear();
    console.log(today);
}
//calling function
printDate();