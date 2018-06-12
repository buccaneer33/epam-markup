'use strict';

const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
	entry:{
		js: './src/js/index.js'
	},
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  	module: {
		rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {presets: ['babel-preset-env']}
					}
				},{ 
					test: /\.less$/,
					use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: ["css-loader", "less-loader"],
						publicPath:'./css/'
					})
				},{
					test: /\.(png|jpg|gif)$/,
					use: [
						  {
							loader: 'file-loader',
							options: {
								name: './img/[name].[ext]',
								context: path.resolve(__dirname, "./img")
							}
						  }
						]
				}
		]
  },
  plugins: [
     new ExtractTextPlugin(
		{filename:'./css/bundle.css'}
	 ),      
	 new HtmlWebpackPlugin({
		files: {
			"css": [ "main.css" ],
			"js" : [ "js/main.js"],
				"chunks": {
					  "head": {
						"entry": "",
						"css": [ "css/main.css" ]
					  },
					  "main": {
						"entry": "js/main.js",
						"css": []
					  },
				}
			},
			title: 'Epam-Markup Http build',
			//minify: {collapseWhitespace: true},
			filename: '../dist/index.html',
			template: 'src/index.html'
        }),
	new FaviconsWebpackPlugin({
    logo: './assets/like-favicon.png',  // Your source logo
    prefix: 'icons-[hash]/',    // The prefix for all image files (might be a folder or a name)
    emitStats: false,    // Emit all stats of the generated icons
    statsFilename: 'iconstats-[hash].json',// The name of the json containing all favicon information
    persistentCache: true,
    inject: true, // Inject the html into the html-webpack-plugin
	background: '#fff',// favicon background color (see https://github.com/haydenbleasel/favicons#usage)
    title: 'Webpack App',// favicon app title (see https://github.com/haydenbleasel/favicons#usage)
		icons: {
		  android: true,
		  appleIcon: true,
		  appleStartup: true,
		  coast: false,
		  favicons: true,
		  firefox: true,
		  opengraph: false,
		  twitter: false,
		  yandex: false,
		  windows: false
		}
	})
  ]
};
module.exports = config;