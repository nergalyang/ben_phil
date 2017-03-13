var HomeView        = require('../view/home/home.js');
var BlogLayoutView  = require('../view/blog/blog.layout.js');
var AboutView       = require('../view/about/about.layout.js');

var MyController = {
  home: function() {
  	this.layout = new HomeView();
  	this.layout.render();
  },
  writeBlog: function() {
  	var that = this;
    checkLayout(this);
    require.ensure([], function(require) {//实现按需加载
      var WriteBlogView= require('../view/blog/write.blog.layout.js');
      that.layout = new WriteBlogView();
      that.layout.render();
    });
  },
  blogs: function() {
    checkLayout(this);
    this.layout = new BlogLayoutView();
    this.layout.render();
  },
  about : function () {  
    checkLayout(this);
    this.layout = new AboutView();
    this.layout.render();
  }  
};
function checkLayout(that) {
  if(that.layout) {
    that.layout.destroy();
    $('header').after('<section id="app"></section>');
  }
}
module.exports = MyController;