const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  entry: './src/less/main.less',
    node: {
      fs: 'empty',
      net: 'empty'
    },
  output: {
    path: path.resolve(__dirname, 'dist/css'),
    filename: 'bundle.js'
  },
  
	module: {
		rules: [
		{
		  test: /\.less$/,
		  use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: ["css-loader", "less-loader"]
		})
		}]
  }, 
	  
	  
    plugins: [
     new ExtractTextPlugin({filename:'bundle.css'})
  ]
  
};