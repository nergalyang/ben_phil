var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var params = [];
	// params.push(req.user[0].name);
	params.push("Ben");
	var sql = 'select * from BLOGS where username=?';
	var cb = function(err, rows, fields) {
	        if (err) throw err;
	        var data = rows[0];
	        res.send(data);

	};
	pool({sql:sql,values: params,}, cb);
};