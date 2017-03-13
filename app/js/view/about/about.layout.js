
var template = require('../../template/about/about.layout.hbs');


var AboutView = Marionette.View.extend({
  el: '#app',
  template: template,
  ui : {
    
  },
  events: {
    
  },
  regions : {
   
  },
  initialize : function () {
    console.log(__dirname)
  },
  onRender : function () {

  }
});
module.exports = AboutView;
