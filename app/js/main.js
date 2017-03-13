var MVC = {};
var Application = require('./app/app.js');
var Router = require('./router/router.js');

MVC.App = new Application();
MVC.Router = new Router();
//MVC.Controller = new Router();

MVC.App.on('before:start', function() {
	//renderer funciton cannot be execute at onStart
	Marionette.Renderer.render = function(template, data) {
	  if(typeof template == 'function') {
	  	return template(data);
	  }else {
	  	return template;
	  } 
	};

	Backbone.history.start();
});

MVC.App.start();