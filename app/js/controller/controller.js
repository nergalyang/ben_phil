var HomeView = require('../view/home/home.js');

var MyController = {
  home: function() {
  	this.layout = new HomeView();
  	this.layout.render();
  }
};
module.exports = MyController;