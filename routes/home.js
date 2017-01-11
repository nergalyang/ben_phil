var home = function (req, res) {
	res.render('home/home',{'name':'Peter'});
};
module.exports = home;