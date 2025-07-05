var current = new Date()
function getCurrentDate()
{
    let today = current.getDate() + "/" + (current.getMonth()+ 1) + "/" + current.getFullYear();
    return today;
}
function getCurrentTime()
{
    let time = current.getHours() + ":" + current.getMinutes();
    return time;
}
//require to export
module.exports.today = getCurrentDate;
module.exports.time = getCurrentTime;
