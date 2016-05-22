var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', function(req, res, next) {
    var body = req.body;
    var username = body.username,
        password = body.password;
    db.getConnection(function(err, connection) {
        if (err) throw err;
        var sql = 'insert into users(username, password) values("' + username + '","' + password + '");';
        connection.query(sql, function(err, result) {
            if (err) res.end(1);
            res.end(0);
            connection.release();
        });
    });
});

module.exports = router;