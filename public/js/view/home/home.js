var Marionette = require('backbone.marionette');
var template = require("./home.hbs");
var HomeView = Marionette.View.extend({
  el: 'body',
  template: template,


});

module.exports = HomeView;

