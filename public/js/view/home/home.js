var Marionette = require('backbone.marionette');
var template = require('../../template/home/home.hbs');
var Model = require('../../model/home/homeModel');
var HomeView = Marionette.View.extend({
  el: '#app',
  template: template,
  initialize : function () {
  	var that = this;
  	this.model = new Model();
  	this.model.fetch({
  		success : function () {
  			that.render();
  		}
  	});
  },
  ui : {
  	clickMe : '#clickme'
  },
  events : {
  	'click @ui.clickMe' :'changeModel'
  },
  changeModel : function () {
  	this.model.set({'name':'Akito',age:123});
  }
});

module.exports = HomeView;

