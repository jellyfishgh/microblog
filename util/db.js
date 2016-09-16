const mysql = require('mysql');
const mongoose = require('mongoose');
const config = require('../config.json');

/*
ubuntu mysql-server
local,root,password:jellymysql
remote(192.168.1.100),jellyfish,password:jellymysql
*/
var pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    port: config.mysql.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/microblog`);

module.exports = {
    mysqlDB: pool,
    mongoDB: mongoose.connection
};
