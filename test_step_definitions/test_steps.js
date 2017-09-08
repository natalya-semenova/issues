const { Given } = require('cucumber');

Given(/^some test$/,
  async function step() {
    await browser.refresh();
  },
);

Given(/^it succeeds "(-?\d+)"$/,
  async function step(number) {
    console.log(`Gonna seleep for ${number} milliseconds`);
    await browser.sleep(number);
    console.log('Done sleeping');
  },
);
