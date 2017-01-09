var Backbone = require('backbone');
var HomeModel = Backbone.Model.extend({
	initialize: function(){ 
	    //初始化时绑定监听  
	    this.bind("change:name",function(){  
	        var name = this.get("name");  
	        console.log("你改变了name属性为：" + name);  
	    });  
	},  
	url:'/getName'
});

module.exports = HomeModel;