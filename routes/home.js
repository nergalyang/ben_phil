var home = function (req, res) {
	res.render('home/home',{'name':'Ben && Phil'});
};
module.exports = home;