var HomeView = require('../view/home/home.js');
var BlogView= require('../view/blog/blog.layout.js');

var MyController = {
  home: function() {
  	this.layout = new HomeView();
  	this.layout.render();
  },
  blog: function() {
  	this.layout.destroy();
  	$('<section id="app"></section>').appendTo('header');
  	this.layout = new BlogView();
  	this.layout.render();
  }
};
module.exports = MyController;