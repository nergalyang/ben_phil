var template = require('../../template/blog/single.blog.hbs');
var BlogModel  = require('../../model/blog/blog.model.js');
// var MessageView  = require('../utils/message.js');
// var MessageModel = require('../../model/utils/message.model.js');

var SingleBlogView = Marionette.View.extend({
  template: template,
  ui : {
  	back_to_list : '#goBackToList'
  },
  events: {
    'click @ui.back_to_list' : 'goBackToList'
  },
  regions : {
    
  },
  initialize : function () {
    this.model = new BlogModel({id: this.options.id});
    this.model.fetch({async:false});
  },
  goBackToList : function () {
    this.triggerMethod('show:list');
  }
});
module.exports = SingleBlogView;
