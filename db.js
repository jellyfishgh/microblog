var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'jellymysql',//ubuntu mysql-server password:jellymysql
    database: 'microblog'
});

module.exports = pool;