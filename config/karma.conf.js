
basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  { pattern: 'app/lib/jquery-2.0.0.min.js', included: false },
  { pattern: 'app/lib/angular.min.js', included: false },
  { pattern: 'app/lib/angular-resource.js', included: false },
  { pattern: 'app/lib/moment.min.js', included: false },
  { pattern: 'app/lib/moment-fr.js', included: false },
  { pattern: 'app/lib/accounting.min.js', included: false },
  { pattern: 'app/lib/jquery.bootstrap-growl.min.js', included: false },
  { pattern: 'app/js/*.js', included: false },
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
