var Marionette = require('backbone.marionette');
var template = require('../../template/blog/blog.layout.hbs');
CKEDITOR.basePath = '/';//设置依赖的路径
import 'ckeditor'; //import是编译时
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
  initialize : function () {
    
  },
  onRender : function () {
  	  CKEDITOR.replace( 'editRegion' );
  },
  submitArticle : function () {
  	var title = $('#title').val();
  	$.post({
      data : {
        title:title,
        content: CKEDITOR.instances.editRegion.getData()
      },
  		url:'api/saveArticle',
  		success: function () {
  			console.log('123');
  		}
  	});
  }
});

module.exports = BlogView;
