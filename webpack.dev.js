 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 /*
 If from an OO track, the 'merge' constant is a work around for JS b/c it does not have 'proper' object inheritance.
 */
 module.exports = merge(common, {
 	devtool: 'inline-source-map',
 	devServer: {
 		contentBase: './dist'
 	}
 });
