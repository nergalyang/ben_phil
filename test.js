var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '20160830',
  database : 'ben_phil'
});

connection.connect();
 
connection.query('SELECT * FROM USERS where name ="Ben"', function(err, rows, fields) {
  if (err) throw err;
 	console.log(rows[0].name);
});
 
connection.end();