var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var MyRouter = require('../router/router.js');
var Application = Marionette.Application.extend({
	initialize: function(options) {
		this.mergeOptions(options, ['myOption']);
		console.log('The option is:', this.myOption);
	},
	onBeforeStart: function() {
		//renderer funciton cannot be execute at onStart
		Marionette.Renderer.render = function(template, data) {
		  return template(data);
		};
		new MyRouter({showView:this.showView});
		Backbone.history.start();
	}
});


module.exports = Application;