var HomeView = require('../view/home/home.js');
var WriteBlogView= require('../view/blog/write.blog.layout.js');
var BlogListView= require('../view/blog/blog.list.js');
var BlogListModel  = require('../model/blog/blog.model.js');

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
    var that = this;
    if(this.layout) {
      this.layout.destroy();
      $('<section id="app"></section>').appendTo('header');
    }
    var model = new BlogListModel();
    model.fetch({success:function(model){
      that.layout = new BlogListView({model: model});
      that.layout.render();
    }});
  }  
};
module.exports = MyController;