var MVC = {};

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Application = require('./app/app.js');
var Router = require('./router/router.js');

MVC.App = new Application();
MVC.Router = new Router(MVC);
MVC.Controller = new Router();

MVC.App.on('before:start', function() {
	//renderer funciton cannot be execute at onStart
	Marionette.Renderer.render = function(template, data) {
	  return template(data);
	};
	Backbone.history.start();
});

MVC.App.start();