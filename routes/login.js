var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
    res.render('login', {
        title: 'login'
    });
});

router.post('/', function(req, res, next){
    var body = req.body;
    var username = body.username,
        password = body.password;
    db.getConnection(function(err, connection){
        if(err) throw err;
        var sql = 'select password from users where username = "' + username + '"';
        connection.query(sql, function(err, rows){
            if(err) throw err;
            console.log(rows[0]);
            if(rows.length === 0) res.end('1');
            else {
                var pwd = rows[0].password;
                if(pwd === password) res.end('0');
                else res.end('2');
            }
            connection.release();
        });
    });
});

module.exports = router;
