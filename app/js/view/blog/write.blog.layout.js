var Marionette = require('backbone.marionette');
var template = require('../../template/blog/write.blog.layout.hbs');
var Model  = require('../../model/blog/blog.model.js');
var MessageView  = require('../utils/message.js');
var MessageModel = require('../../model/utils/message.model.js');

// var template = require('html!../../template/blog/test.html');
// require ('../../../../node_modules/ckeditor/ckeditor.js'); //import是编译时
import 'ckeditor';
CKEDITOR.basePath = '/';//设置依赖的路径
//var Model = require('../../model/home/homeModel');
var BlogView = Marionette.View.extend({
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
    
  },
  onRender : function () {
  	  //必须设置filebrowse 的路径，相应的browse server的按钮才会出现
     CKEDITOR.replace( 'editRegion');
  },
  submitArticle : function () {
    var that = this;
    var title = $('#title').val();
    var content = CKEDITOR.instances.editRegion.getData();
    var model = new Model();
    var data = {
      'title':title,
      'content': content
    };
    model.on("invalid", function(model, error) {
      var messageModel = new MessageModel({message:error});
      messageModel.set('status','warning');
      that.showChildView('messageRegion',new MessageView({model:messageModel}));
    });
    model.save(data,{
        success: function(model, response) {
          var messageModel = new MessageModel({message:response.message});
          messageModel.set('status','ok');
          that.showChildView('messageRegion',new MessageView({model:messageModel}));
        },
        error: function(model, response) {
          var messageModel = new MessageModel({message:response.message});
          messageModel.set('status','warning');
          that.showChildView('messageRegion',new MessageView({model:messageModel}));
    }});
  }
  
});
module.exports = BlogView;
