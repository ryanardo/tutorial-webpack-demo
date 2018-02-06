const path = require('path');

module.exports = {
	entry: './src/index.js', //source file
	output: {
		filename: 'bundle.js', //end filepoint
		path: path.resolve(__dirname, 'dist') //filepath
	},
	module: {
		rules: [
			// Will load our CSS files into the index.html file.
			{
				test: /\.css$/, //regex for files to load
				use: [
					'style-loader', //what loader(s) to shove them through, in order
					'css-loader'
				]
			},
			// Will load our image files into the index.html file.
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};
