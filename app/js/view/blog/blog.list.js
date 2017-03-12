var template = require('../../template/blog/blog.list.hbs');
var BlogModel  = require('../../model/blog/blog.model.js');
// var MessageView  = require('../utils/message.js');
// var MessageModel = require('../../model/utils/message.model.js');

var BlogListView = Marionette.View.extend({
  template: template,
  ui : {
  	'post-title' : '.post-title a',
    'read-more' : '.read-more'
  },
  events: {
    'click @ui.post-title': 'gotoblog',
    'click @ui.read-more': 'gotoblog'
  },
  regions : {
    messageRegion : '#messageRegion'
  },
  initialize : function () {
    this.model = new BlogModel();
    this.model.fetch({async:false});
  },
  onRender : function (e) {
  	  //必须设置filebrowse 的路径，相应的browse server的按钮才会出现
  },
  gotoblog : function (e) {
    var id = $(e.target).attr('blogId');
    this.triggerMethod('show:singleBlog', id);
  }
});
module.exports = BlogListView;
