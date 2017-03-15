var template = require('../../template/javascript/js.layout.hbs');

var JSView = Marionette.View.extend({
  el: '#app',
  template: template,
  initialize : function () {
    
  }
});
module.exports = function () {
	new JSView().render();
};

