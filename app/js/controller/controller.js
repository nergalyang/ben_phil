var HomeView        = require('../view/home/home.js');
var BlogLayoutView  = require('../view/blog/blog.layout.js');
var AboutView       = require('../view/about/about.layout.js');
var MyController = {
  home: function() {
  	this.layout = new HomeView();
    this.layout.render();
  },
  writeBlog: function() {
    this.clearT();
    require.ensure([], function(require) {//实现按需加载 code split
      var WriteBlogView= require('../view/blog/write.blog.layout.js');
      new WriteBlogView().render();
    });
  },
  blogs: function() {
    this.clearT();
    new BlogLayoutView().render();
  },
  about : function () {  
    this.clearT();
    new AboutView().render();
  },
  clearT : function () {
    if(this.layout) {
      this.layout.destroy();
      $('header').after('<section id="app"></section>');
    }
  }  

};
module.exports = MyController;