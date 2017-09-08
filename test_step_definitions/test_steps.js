// const { Given } = require('cucumber');
//
// Given(/^some test$/,
//   async function step() {
//     await browser.refresh();
//   },
// );
//
// Given(/^it succeeds "(-?\d+)"$/,
//   async function step(number) {
//     console.log(`Gonna seleep for ${number} seconds`);
//     await browser.sleep(number);
//     console.log('Done sleeping');
//   },
// );
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given }) => {
  Given(/^some test$/,
    async function step() {
      await browser.refresh();
    },
  );

  Given(/^it succeeds "(-?\d+)"$/,
    async function step(number) {
      console.log(`Gonna seleep for ${number} seconds`);
      await browser.sleep(number);
      console.log('Done sleeping');
    },
  );
});
