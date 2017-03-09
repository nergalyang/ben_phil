var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var id = req.params.id;
	var params = ["Ben",id];
	var sql = 'select * from BLOGS where username=? and idblogs =?';
	var cb = function(err, rows, fields) {
	        if (err) throw err;
	        var data = rows;
	        res.send(data);
	};
	pool({sql:sql,values: params,}, cb);
};