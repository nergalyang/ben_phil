var Marionette = require('backbone.marionette');
var template = require('../../template/blog/blog.layout.hbs');
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
      console.log('here')
     CKEDITOR.replace( 'editRegion');
  },
  submitArticle : function () {
    var that = this;
    var title = $('#title').val();
    var content = CKEDITOR.instances.editRegion.getData();
    var model = new Model();
    if(model.set({
      'title':title,
      'content': content
    }).validationError) {

    }
    model.save(null,{
        success: function(model, response) {
          
          var messageModel = new MessageModel({message:response.message});
          console.log(messageModel);
          that.showChildView('messageRegion',new MessageView({model:messageModel}));
        },
        error: function(model, response) {
            $('.main').hide();
    }});
  }
  
});
module.exports = BlogView;
