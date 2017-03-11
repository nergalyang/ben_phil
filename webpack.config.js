var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
module.exports = {
  entry:{
      bundle : __dirname + '/app/js/main.js' 
  },
  output:{
      path: __dirname + '/public/',
      filename: 'bundle.js'
  },
	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          compact: false//不然超过500kb会报错
        }
      },
      { 
        test: /\.hbs$/,
        //loader: 'handlebars-loader',//默认helper是在同级目录下的js文件
        loader: "handlebars-loader?helperDirs[]="+__dirname + "/app/js/helpers"
        //loaders: [{ test: /\.handlebars$/, loader: __dirname + "/../../?helperDirs[]=" + __dirname + "/helpers" }]
        // loader: __dirname + "/../../?helperDirs[]=" + __dirname + "/helpers"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      Marionette:'backbone.marionette',
      Backbone:'backbone'
    })
  ],
  node: {
  	fs: "empty"
  }
};