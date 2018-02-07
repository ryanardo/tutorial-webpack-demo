const testsContext = require.context(".", true, /.test$/);

module.exports = function (config) {
	config.set({
		basePath: '../..',
		frameworks: ['jasmine'],
		files: [
			{ pattern: 'test/*_test.js', watched: false },
			{ pattern: 'test/**/*_test.js', watched: false }
    ],
		preprocessors: {
			'test/*.test.js': ['webpack'],
			'test/**/*.test.js': ['webpack']
			'test/test.index.js': ['webpack', 'sourcemap']
		},
		testsContext.keys().forEach(testsContext);
		webpack: {
			// Any custom webpack configuration...
		},
		webpackMiddleware: {
			// Any custom webpack-dev-middleware configuration...
			stats: 'errors-only'
			devtool: 'inline-source-map'
		}
	});
};
