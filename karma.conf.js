var webpackConfig = require('./webpack.dev.js');
module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'src/**/*.js',
      'test/**/*.js',
      'test/**/*Spec.js'
    ],
		exclude: [
    ],
		preprocessors: {
			'.app/bundle.js': ['webpack'],
			'./test/**/*.js': ['webpack']
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,

		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		webpack: webpackConfig
	})
}
