
basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/jquery-2.0.0.min.js',
  'app/lib/angular.min.js',
  'app/lib/angular-resource.js',
  'app/lib/moment.min.js',
  'app/lib/moment-fr.js',
  'app/lib/accounting.min.js',
  'app/lib/jquery.bootstrap-growl.min.js',
  'test/lib/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

logLevel = LOG_INFO;

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
