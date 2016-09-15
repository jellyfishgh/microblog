const mysql = require('mysql');
const mongoose = require('mongoose');
const config = require('../config.json');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    port: config.mysql.port,
    user: 'root',
    password: 'jellymysql',//ubuntu mysql-server password:jellymysql
    database: 'microblog'
});

mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/microblog`);

module.exports = {
    mysqlDB: pool,
    mongoDB: mongoose.connection
};
