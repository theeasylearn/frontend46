var mysql = require('mysql');
var option = {
    password:'',
    user:'root',
    database:'frontend46',
    port:'3306',
    host:'localhost'
}
var con = mysql.createConnection(option);
con.connect(function(error){
    if(error==null)
        console.log('connection established');
    else 
    {
        console.log('error in connection');
        console.log(error);
    }
});
module.exports.con = con;