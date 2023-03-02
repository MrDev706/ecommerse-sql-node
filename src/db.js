
const mysql = require('mysql')

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ecomm',
    multipleStatements: true
    });

module.exports.mysqlConnection = mysqlConnection