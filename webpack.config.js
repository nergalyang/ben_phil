var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
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
      // { 
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.hbs$/,
        loader: "handlebars-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],
  node: {
  	fs: "empty"
  }
    
};