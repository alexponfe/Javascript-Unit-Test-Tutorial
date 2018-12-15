const path = require('path');

module.exports = function (config) {
  config.set({
    mode: 'development',
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_with_debugging: {
        base: 'Chrome',
        chromeDataDir: path.resolve(__dirname, '.chrome'),
      },
    },
    browserNoActivityTimeout: 60000,
    frameworks: ['mocha'],
    files: [
      'src/**/*.test.js',
    ],
    exclude: ['node_modules'],
    plugins: [
      'karma-chrome-launcher',
      'karma-tap',
      'karma-mocha',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-sourcemap-loader',
      'karma-browser-reporter',
      'karma-webpack',
    ],
    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap'],
    },
    reporters: ['browser', 'mocha', 'coverage'],
    mochaReporter: {
      output: 'autowatch',
    },
    browserReporter: {
      port: 5432,
      ignoreSuccessful: false,
      ignoreFailed: false,
      ignoreSkipped: false,
    },
    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html' },
      ],
    },
    colors: true,
    singleRun: false,
    autoWatch: true,
  });
};
