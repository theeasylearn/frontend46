var connection = require("./connection");
function insert(request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = `INSERT INTO contact(name, email, mobile, detail) VALUES (?,?,?,?)`;
        var data = [name, email, mobile, detail];
        //var sql = `INSERT INTO contact(name, email, mobile, detail) VALUES ('${name}','${email}','${mobile}','${detail}')`;
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact inserted....' }]);
            }
        });
    }
    // console.log(email,mobile,name,detail);
}
 function select (request, response) {
    //object destructring
    let { id, email } = request.query;
    console.log(id, email);
    let sql;
    if (id === undefined && email === undefined) {
        sql = "select * from contact order by id desc";
        data = [];
    }
    else if (id !== undefined) {
        sql = "select * from contact where id=?";
        data = [id];
    }
    else if (email !== undefined) {
        sql = "select * from contact where email=?";
        data = [email];
    }
    connection.con.query(sql, data, function (error, result) {
        if (error) {
            response.json([{ 'error': 'error occured' }]);
        }
        else {
            if (result.length === 0) {
                response.json([{ 'error': 'no' }, { 'total': 0 }]);
            }
            else {
                response.json(result);
            }
        }
    })
}

function del (request, response) {
    var email = request.body.email;
    if (email === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = "delete from contact where email=?";
        var data = [email];
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.affectedRows > 0)
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact deleted....' }]);
                else
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
            }
        })
    }

}
function update (request, response) {
    var email = request.body.email;
    var mobile = request.body.mobile;
    var name = request.body.name;
    var detail = request.body.detail;
    // input validation 
    if (email == undefined || mobile === undefined || name === undefined || detail === undefined) {
        response.json([{ 'error': 'input is missing' }]);
    }
    else {
        var sql = "UPDATE contact SET name=?,mobile=?,detail=? WHERE email=?";
        var data = [name, mobile, detail, email];
        connection.con.query(sql, data, function (error, result) {
            if (error) {
                response.json([{ 'error': 'error occured' }]);
            }
            else {
                if (result.affectedRows > 0)
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'contact updated....' }]);
                else
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'contact not found' }]);
            }
        });
    }
}
module.exports.insert = insert;
module.exports.select = select;
module.exports.remove = del;
module.exports.update = update;