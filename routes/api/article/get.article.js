var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var params = [];
	params.push(req.user[0].name);
	var sql = 'select * from BLOGS where username=?';
	var cb = function(err, rows, fields) {
	        if (err) throw err;
	        //find out RowDataPeacket Object
	        var data = rows[0];
	        // if (username !== data.name) {
	        //     return done(null, false, { message: 'Incorrect username.' });
	        // }
	        // if (password !== data.password) {
	        //     return done(null, false, { message: 'Incorrect password.' });
	        // }
	        res.send(data);

	};
	pool({sql:sql,values: params,}, cb);
};