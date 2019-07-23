var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'akkigolu26/12',
  database : 'userdb3'
});

module.exports = connection;