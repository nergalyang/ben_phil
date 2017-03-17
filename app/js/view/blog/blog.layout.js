var template = require('../../template/blog/blog.layout.hbs');
var BlogListView = require('../../view/blog/blog.list.js');
var SingleBlogView = require('../../view/blog/single.blog.js');
var BlogModel  = require('../../model/blog/blog.model.js');
// var MessageView  = require('../utils/message.js');
// var MessageModel = require('../../model/utils/message.model.js');

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
    var that = this;
    this.model = new BlogModel();
    this.model.fetch({success : function (){
      that.showChildView('blogRegion', new BlogListView({model: that.model}));
    }});
  },
  // onRender : function () {
  //     model = new BlogModel();
  //     model.on("change", function() {
  //         console.log('in changed');
  //       }
  //     );
  //     model.fetch({async: false});
  //     this.showChildView('blogRegion', blogView);
  //     //试着监听modelchange事件,代码没用的
  // },
  onChildviewShowSingleBlog : function(id) {
    this.showChildView('blogRegion', new SingleBlogView({id: id}));
  },
  onChildviewShowList : function () {
    var that = this;
    this.showChildView('blogRegion', new BlogListView({model: that.model}));
  }
});
module.exports = BlogLayoutView;
