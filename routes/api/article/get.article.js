console.log();
var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var query = 'SELECT * FROM BLOGS where username ="Ben"';
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
	        res.send(rows);

	};
	pool(query, cb);
};