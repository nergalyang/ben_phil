var MVC = {};
var Application = require('./app/app.js');
var Router = require('./router/router.js');

MVC.App = new Application();
MVC.Router = new Router();
//MVC.Controller = new Router();


	require.ensure([], function(require) {//实现按需加载
		var JSRouter = Marionette.AppRouter.extend({
		var javascript = require('./view/javascript/js.layout.js');
		appRoutes: {
			"javascript": "javascript"
			javascript
		}
		new JSRouter()
		});
	});



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