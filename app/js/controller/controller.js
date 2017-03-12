var HomeView = require('../view/home/home.js');
var WriteBlogView= require('../view/blog/write.blog.layout.js');
var BlogLayoutView= require('../view/blog/blog.layout.js');

var MyController = {
  home: function() {
  	this.layout = new HomeView();
  	this.layout.render();
  },
  writeBlog: function() {
  	if(this.layout) {
      this.layout.destroy();
      $('<section id="app"></section>').appendTo('header');
    }
    this.layout = new WriteBlogView();
    this.layout.render();
  },
  blogs: function() {
    if(this.layout) {
      this.layout.destroy();
      $('<section id="app"></section>').appendTo('header');
    }
    this.layout = new BlogLayoutView();
    this.layout.render();

  }  
};
module.exports = MyController;