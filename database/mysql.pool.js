var mysql = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '20160830',
  database : 'ben_phil'
});

module.exports = function (sql, callback){
    this.getConnection(function (err, connection){
        if(!!err){  
            callback(err,null,null);  
        }else{  
          connection.query(sql, function (){
              connection.release();
              //arguments 分别是qerr vals filelds， apply参数 第一个是context，第二个开始才是参数
              callback.apply(connection, arguments);
          });
        }
    });
}.bind(pool);

