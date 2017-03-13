var path = require("path");
var fs = require("fs");
var webpack = require("webpack");
var plugins = require('webpack-load-plugins')();
module.exports = {
  entry:{
      bundle : __dirname + '/app/js/main.js' 
  },
  output:{
      path: __dirname + '/public/',

      filename: '[name].js',//对应entry的key 名字，key有多少就有多少
      vendor: ['jquery'], //第三方库
      publicPath:"/", //给require.ensure用
      chunkFilename: "[name].chunk.js"//实现code split，在代码里面用require.ensure，当处理一个比较大而且不常用的组件就用这个吧
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
        //loader: 'handlebars-loader',//默认helper是在同级目录下的js
        loader: "handlebars-loader?helperDirs[]="+__dirname + "/app/js/helpers"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      Marionette:'backbone.marionette',
      Backbone:'backbone'
    }),
    //内建压缩 不知有无用
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')//第三方库的打包文件，参考http://www.cnblogs.com/pspgbhu/p/6262477.html
  ],
  node: {
  	fs: "empty"
  }
};