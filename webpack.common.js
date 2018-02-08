/*
NPM Packages necessary to make your code run/function.
*/
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	/*
	Location of your source code.
	> You can have more than 1 source code file.
	*/
	entry: {
		app: './src/index.js'
	},
	/*

	*/
	plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
			title: 'Production'
		})
  ],
	/*
	Location of your output bundled code (a bundle will be created for each of your source code files).
	*/
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
