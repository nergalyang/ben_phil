var Marionette = require('backbone.marionette');
var myController = require('../controller/controller.js');
var MyRouter = Marionette.AppRouter.extend({
	intialize : function(data){
		
	},
	controller: myController,
	appRoutes: {
		"": "home",
		"writeBlog": "writeBlog",
		"updateOrdelete": "udBlog",
		"blogs": "blogs",
		"about":"about"
	}
});
module.exports = MyRouter;