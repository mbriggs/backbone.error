// Karma configuration
// Generated on Tue Sep 24 2013 12:59:39 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'bower_components/jquery/jquery.js',
      'bower_components/underscore/underscore.js',
      'bower_components/backbone/backbone.js',
      'bower_components/chai/chai.js',
      'bower_components/sinon/pkg/sinon.js',
      'bower_components/sinon-chai/lib/sinon-chai.js',
      'backbone.class.js',
      'tests/**/*.js'
    ],

    exclude: [
    ],
    reporters: ['progress', 'osx'],

    plugins: [
      'karma-osx-reporter',
      'karma-mocha',
      'karma-chrome-launcher'
    ],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
