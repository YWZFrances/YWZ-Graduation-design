var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './component/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');
module.exports = {
	entry:  __dirname + "/component/index.js",//已多次提及的唯一入口文件
	  output: {
	    path: __dirname + "/build",//打包后的文件存放的地方
	    filename: "bundle.js"//打包后输出文件的文件名
	  },
	module: {
		loaders: [
			{
			test: /\.jsx?$/,
			loaders: ['babel-loader?presets[]=es2015,presets[]=react']
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			]
	}
}