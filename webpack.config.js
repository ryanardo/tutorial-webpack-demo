const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Will create a new index.html file with updated dependencies.
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Will clean the 'dist' folder on each new build command.
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //Plugin to both minify our JS code, and perform tree shaking on it to remove extranneous JS code not being used.

module.exports = {
	entry: {
		app: './src/index.js',
	},
	devtool: 'inline-source-map', //Source mapp tool included with JavaScript.
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new UglifyJSPlugin(),
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Tree Shaking'
		}),
	],
	output: {
		filename: '[name].bundle.js', //end filepoint
		path: path.resolve(__dirname, 'dist') //filepath
	},

};
