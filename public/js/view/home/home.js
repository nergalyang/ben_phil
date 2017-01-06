var Marionette = require('backbone.marionette');
var HomeTemplate = require('html!../../template/home.html');
var myPrecompiledTemplate = _.template('<h1>some template</h1>');
var HomeView = Marionette.View.extend({
  el: 'body',
  template: myPrecompiledTemplate,


});

module.exports = HomeView;

