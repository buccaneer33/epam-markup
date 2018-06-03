const path = require('path');
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
		use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
      }
    ]
  },
    plugins: [
     new ExtractTextPlugin('bundle.css')
  ]
};