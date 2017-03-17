var pool = require('../../../database/mysql.pool.js');
module.exports = function (req, res, next) {
	var params = [];
	// // params.push(req.user[0].name);
	// params.push("Ben");
	var sql = 'select blogs.*, USERS.headimg from ben_phil.blogs,ben_phil.USERS where blogs.username = users.name;';
	var cb = function(err, rows, fields) {
	    if (!!err) throw err;
 		res.contentType('json');//返回的数据类型
    	res.send(JSON.stringify({data:rows,status:'success'}));//给客户端返回一个json格式的数据
	};
	pool({sql:sql,values: params,}, cb);
};