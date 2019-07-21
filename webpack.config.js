const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		  {
		    test: /\.(css|sass|scss)$/,
		    use: [
		      {loader:'style-loader'},
		      {loader: 'css-loader'},
		      {loader: 'sass-loader'}
		    ]
		  }
		]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: './src/index.html'
	    })
    ]

};