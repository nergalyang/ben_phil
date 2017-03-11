var Backbone = require('backbone');
var HomeModel = Backbone.Model.extend({
	initialize: function(){ 
	    //初始化时绑定监听  
	    // this.bind("change:title",function(){  
	    //     if(this.get("title")===''){
	    //     	return false;
	    //     }
	    // });  
	},  
	url:function () {
		if(this.id) {
			return 'api/article'+this.id;
		}else {
			return 'api/article';
		}
	},
    validate : function(data) {  
	    if(data.title ==='') {  
	        return '标题不能为空.';  
	    }else if(data.content.trim() ==='') {
	    	return '内容不能为空.';  
	    }  
	    return false;  
	}  
});

module.exports = HomeModel;