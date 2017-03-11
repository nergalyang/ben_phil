var template = require('../../template/utils/message.hbs');

var View = Marionette.View.extend({
  template: template,
  initialize : function () {
    
  },
  ui : {
  	'closeMsg' : '#closeMsg'
  },
  events: {
    'click @ui.closeMsg' : 'closeMsg'
  },
  closeMsg : function () {
  	this.destroy();
  }
});

module.exports = View;
