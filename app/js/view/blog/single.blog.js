var template = require('../../template/blog/single.blog.hbs');
var BlogModel  = require('../../model/blog/blog.model.js');
// var MessageView  = require('../utils/message.js');
// var MessageModel = require('../../model/utils/message.model.js');

var SingleBlogView = Marionette.View.extend({
  template: template,
  ui : {
  	
  },
  events: {
    
  },
  regions : {
    
  },
  initialize : function () {
    this.model = new BlogModel({id: this.options.id});
    console.log(this.model);
    this.model.fetch({async:false});
  },
  onRender : function () {
  	  //必须设置filebrowse 的路径，相应的browse server的按钮才会出现
  }
});
module.exports = SingleBlogView;
