var path = require("path");
var fs = require("fs");
module.exports = {
    entry:{
        bundle : __dirname + '/public/js/main.js' 
    },
    output:{
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
	module: {
    loaders: [
      
      { test: /\.hbs$/,
       loader: "handlebars-loader" }
    ]
  },
  node: {
  	fs: "empty"
  }
    
};