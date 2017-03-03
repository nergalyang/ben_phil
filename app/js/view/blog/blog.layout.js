var Marionette = require('backbone.marionette');
var template = require('../../template/blog/blog.layout.hbs');
CKEDITOR.basePath = '/';//设置依赖的路径
import 'ckeditor'; //import是编译时
//var Model = require('../../model/home/homeModel');
var BlogView = Marionette.View.extend({
  el: '#app',
  template: template,
  initialize : function () {
    console.log(CKEDITOR);

  },
  onRender : function () {
  	  CKEDITOR.replace( 'editRegion' );
  }
});

module.exports = BlogView;
