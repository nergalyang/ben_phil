var Marionette = require('backbone.marionette');
var myController = require('../controller/controller.js');
var MyRouter = Marionette.AppRouter.extend({
	intialize : function(data){
		
	},
	controller: myController,
	appRoutes: {
		"": "home",
		"blog": "blog"
	}
});

module.exports = MyRouter;