var mysql = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '20160830',
  database : 'ben_phil'
});

module.exports = function (sql, callback){
    this.getConnection(function (err, connection){
        connection.query(sql, function (){
            callback.apply(connection, arguments);
            connection.release();
        });
    });
}.bind(pool);

