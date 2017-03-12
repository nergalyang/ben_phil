var template = require('../../template/blog/blog.layout.hbs');
var BlogListView = require('../../view/blog/blog.list.js');
var SingleBlogView = require('../../view/blog/single.blog.js');
var BlogModel  = require('../../model/blog/blog.model.js');
// var MessageView  = require('../utils/message.js');
// var MessageModel = require('../../model/utils/message.model.js');
var blogView = new BlogListView();
var singleBlogView = new SingleBlogView();

var BlogLayoutView = Marionette.View.extend({
  el: '#app',
  template: template,
  ui : {
  	
  },
  events: {
    
  },
  regions : {
    blogRegion : '#blogRegion'
  },
  initialize : function () {
    
  },
  onRender : function () {
  	  var model = new BlogModel();
      model.on("change", function() {
          console.log('in changed');
        }
      );
      model.fetch({async: false});
      this.showChildView('blogRegion', blogView);
      //试着监听modelchange事件
  },
  onChildviewShowSingleBlog : function() {
    this.showChildView('blogRegion', singleBlogView);
  }
});
module.exports = BlogLayoutView;
