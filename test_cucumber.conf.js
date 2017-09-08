const _ = require('lodash');
const { defineSupportCode } = require('cucumber');

const hooksTimeout = { timeout: 5 * 1000 };

const getScenarioName = scUri => _.last(scUri.split('/'));

defineSupportCode(({ After, Before, setDefaultTimeout }) => {
  setDefaultTimeout(2000 * 1000);

  Before(hooksTimeout, async function browserSetup(scenario) {
    browser.ignoreSynchronization = false;
    console.log(`Starting '${getScenarioName(scenario.sourceLocation.uri)}'`);
    await browser.get(browser.params.spaUrl);
  });

  After(hooksTimeout, async function scenarioLogs(scenario) {
    console.log(`Finishing '${getScenarioName(scenario.sourceLocation.uri)}'`);
  });
});
