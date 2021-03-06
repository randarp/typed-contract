// Karma configuration
// Generated on Sun Jul 03 2016 12:04:06 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    // included = false, because we want to load it view RequireJS
    files: [
      'karma.browser.test-main.js',
      {pattern: 'typedcontract.js', included: false, served: true},
      {pattern: 'typedcontract.js.map', included: false, served: true},
      {pattern: 'typedcontract.specs/contract.typescript.requireJS.spec.js', included: false},
      {pattern: 'typedcontract.specs/contract.typescript.requireJS.spec.js.map', included: false},
      {pattern: 'typedcontract.specs/contract.javascript.requireJS.spec.js', included: false},
      {pattern: 'typedcontract.specs/contract.typescript.requireJS.spec.js.map', included: false},
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


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


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
