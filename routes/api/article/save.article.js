var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
	var images = req.body.images?req.images:null;
	//res.json({title:title,content:content});
	var query = 'INSERT INTO BLOGS (title, content, images, username ) values ("123","123","123","123")';
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
	        res.send('good');
	        

	};
	pool(query, cb);
};