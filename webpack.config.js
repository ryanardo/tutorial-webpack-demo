const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Will create a new index.html file with updated dependencies.
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Will clean the 'dist' folder on each new build command.
const webpack = require('webpack'); //Hot Module Replacement is built into webpack by default.

module.exports = {
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map', //Source mapp tool included with JavaScript.
	devServer: {
		contentBase: './dist'
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js', //end filepoint
		path: path.resolve(__dirname, 'dist') //filepath
	},

};
