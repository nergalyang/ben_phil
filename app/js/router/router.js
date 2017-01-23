var Marionette = require('backbone.marionette');
var myController = require('../controller/controller.js');
var MyRouter = Marionette.AppRouter.extend({
	intialize : function(data){
		console.log('12333');
	},
	controller: myController,
	appRoutes: {
		"": "home"
	}
});

module.exports = MyRouter;