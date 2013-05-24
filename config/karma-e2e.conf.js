
basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

watcher = false;

singleRun = true;

browsers = ['Chrome'];

urlRoot = '/__tests/';

proxies = {
  '/': 'http://localhost/angular/'
};

logLevel = LOG_INFO;

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
