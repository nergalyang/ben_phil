var template = require('../../template/blog/blog.list.hbs');

var MessageView  = require('../utils/message.js');
var MessageModel = require('../../model/utils/message.model.js');

var BlogListView = Marionette.View.extend({
  el: '#app',
  template: template,
  ui : {
  	submitArticle : '#submitArticle'
  },
  events: {
    'click @ui.submitArticle': 'submitArticle'
  },
  regions : {
    messageRegion : '#messageRegion'
  },
  initialize : function () {
    console.log(this.model);
  },
  onRender : function () {
  	  //必须设置filebrowse 的路径，相应的browse server的按钮才会出现
     
  }
});
module.exports = BlogListView;
