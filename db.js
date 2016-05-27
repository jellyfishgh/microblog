var mysql = require('mysql');
var mongoose = require('mongoose');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'jellymysql',//ubuntu mysql-server password:jellymysql
    database: 'microblog'
});

mongoose.connect('mongodb://localhost/microblog');

module.exports = {
    mysqlDB: pool,
    mongoDB: mongoose.connection
};