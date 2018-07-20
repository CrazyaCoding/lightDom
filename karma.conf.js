// Karma configuration
// Generated on Thu Jul 19 2018 16:46:26 GMT+0800 (CST)

module.exports = function(config) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [{ pattern: 'dist/*.js', included: false }, 'test/index.html'],

		// list of files / patterns to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		plugins: [
			'karma-mocha',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-coverage',
			'karma-spec-reporter'
		],
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Safari', 'Chrome', 'Firefox', 'PhantomJS', 'Opera', 'IE'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
