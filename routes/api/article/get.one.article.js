var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var id = req.params.id;
	// var params = ["Ben",id];
	var params = [id];
	// var sql = 'select * from BLOGS where username=? and idblogs =?';
	var sql = 'select * from BLOGS where idblogs =?';
	var cb = function(err, rows, fields) {
	        if (err) throw err;
	        var data = rows[0];
	        //logsuccess
	        res.json(data);
	};
	pool({sql:sql,values: params,}, cb);
	var updatesql = 'UPDATE BLOGS SET numvisited=numvisited+1 where idblogs =?';
	var updatecb = function(err, rows, fields) {
	        if (err) throw err;
	        //logsuccess
	        console.log('updated');
	};
	pool({sql:updatesql,values: params,}, updatecb);
};