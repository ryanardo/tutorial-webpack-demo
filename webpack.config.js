const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Will create a new index.html file with updated dependencies.

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	output: {
		filename: '[name].bundle.js', //end filepoint
		path: path.resolve(__dirname, 'dist') //filepath
	},

};
