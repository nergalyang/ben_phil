var Marionette = require('backbone.marionette');
var myController = require('../controller/controller.js');

var MyRouter = Marionette.AppRouter.extend({
	controller: myController,
	appRoutes: {
		"": "home"
	}
});

module.exports = MyRouter;