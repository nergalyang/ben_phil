var HomeView        = require('../view/home/home.js');
var BlogLayoutView  = require('../view/blog/blog.layout.js');
var AboutView       = require('../view/about/about.layout.js');

var MyController = {
  home: function() {
  	new HomeView().render();
  },
  writeBlog: function() {
    require.ensure([], function(require) {//实现按需加载
      var WriteBlogView= require('../view/blog/write.blog.layout.js');
      new WriteBlogView().render();
    });
  },
  blogs: function() {
    new BlogLayoutView().render();
  },
  about : function () {  
    new AboutView().render();
  }  
};
module.exports = MyController;