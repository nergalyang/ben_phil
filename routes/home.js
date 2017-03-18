var home = function (req, res) {
	var user;
	if(req.user) {
		user = req.user[0];
	}
	res.render('home/home',{'name':'Ben && Phil','user':user});
};
module.exports = home;