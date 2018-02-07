const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Will create a new index.html file with updated dependencies.
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Will clean the 'dist' folder on each new build command.

module.exports = {
	entry: {
		app: './src/index.js',
	},
	devtool: 'inline-source-map', //Source mapp tool included with JavaScript.
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement'
		}),
	],
	output: {
		filename: '[name].bundle.js', //end filepoint
		path: path.resolve(__dirname, 'dist') //filepath
	},

};
