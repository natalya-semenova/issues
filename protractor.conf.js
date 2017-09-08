// refer to https://github.com/angular/protractor/blob/master/lib/config.ts
const os = require('os');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const faker = require('faker');


const INSTANCES = 4;

faker.seed(crypto.randomBytes(4).readUIntBE(0, 4));
const tempPath =
  path.join(os.tmpdir(), `e2e-${faker.system.fileName()}-${faker.random.uuid().split('-').reverse().pop()}`);

const config = {
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['test_features/**/*.feature'],
  ignoreUncaughtExceptions: true,
  allScriptsTimeout: 60000,
  getPageTimeout: 20000,
  restartBrowserBetweenTests: false,
  capabilities: {
    browserName: 'chrome',
    // refer to https://sites.google.com/a/chromium.org/chromedriver/capabilities
    chromeOptions: {
      perfLoggingPrefs: {
        enableNetwork: true,
        enablePage: false,
        enableTimeline: false,
      },
      prefs: {
        'download.default_directory': tempPath,
        'download.directory_upgrade': true,
        'profile.default_content_settings.popups': 0,
      },
    },
    loggingPrefs: {
      performance: 'ALL',
    },
    maxInstances: INSTANCES,
    shardTestFiles: true,
  },

  cucumberOpts: {
    // refer to https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#requiring-support-files
    require: [
      'test_cucumber.conf.js',
      'test_context.js',
      'test_step_definitions/**/*.js',

    ],
    format: 'progress-bar',
    tags: '@tryIt_1',
  },
  params: {
    spaUrl: 'http://www.protractortest.org/testapp/ng1/',
    downloadsFolder: tempPath,
  },

  onCleanUp: (number) => {
    console.log('=======================\nonCleanUp\n==========================');
    console.log(`Exit code is: ${number}\n==========================`);
  },

  afterLaunch: () => {
    console.log('=======================\nafterLaunch\n==========================');
  },
};


exports.config = config;
