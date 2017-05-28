var env = require('./env');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : env.DATABASE_HOST,
    user     : env.DATABASE_USERNAME,
    password : env.DATABASE_PASSWORD,
    database : env.DATABASE_NAME
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
