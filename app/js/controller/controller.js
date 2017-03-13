var HomeView = require('../view/home/home.js');
var BlogLayoutView= require('../view/blog/blog.layout.js');

var MyController = {
  home: function() {
  	this.layout = new HomeView();
  	this.layout.render();
  },
  writeBlog: function() {
  	var that = this;
    if(this.layout) {
      this.layout.destroy();
      $('<section id="app"></section>').appendTo('header');
    }
    require.ensure([], function(require) {//实现按需加载
      var WriteBlogView= require('../view/blog/write.blog.layout.js');
      that.layout = new WriteBlogView();
      that.layout.render();
    });
  },
  blogs: function() {
    if(this.layout) {
      this.layout.destroy();
      $('<section id="app"></section>').appendTo('header');
    }
    this.layout = new BlogLayoutView();
    this.layout.render();
  },
  about : function () {  

  }  
};
module.exports = MyController;