var db = require('../db');

function select() {
    db.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = 'select * from users';
        connection.query(sql, function(err, rows) {
            if (err) throw err;
            console.log(rows);
            connection.release();
        });
    });
}

function insert() {
    db.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = 'insert into users(username, password) values("abc", "123")';
        connection.query(sql, function(err, result) {
            if (err) throw err;
            console.log(result);
            connection.release();
        });
    });
}

var arg = process.argv.slice(2)[0];
console.log(arg);

switch (arg) {
    case 'select':
        select();
        break;
    case 'insert':
        insert();
        break;
    default:
        select();
}