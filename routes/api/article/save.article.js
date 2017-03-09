var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
	var username;
	if(!!req.user) {
		username = req.user[0].name;
	}
	console.log(req);
	var params = [title,content,username];
	var sql = 'INSERT INTO BLOGS (title, content, username ) values (?,?,?)';
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
	        res.send({
	        	message: '谢谢自己写完一篇文章哈！',
				data: {} // 原有data.
			});
	        

	};
	pool({sql:sql,values: params,}, cb);
};