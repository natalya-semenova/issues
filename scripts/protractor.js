const { spawnSync } = require('child_process');

const _ = require('lodash');
const { config: envConfig } = require('../envConfig');
const { argv: args } = require('yargs');

const getProtractorBinary = require('./protractorBinary');

const protractorArgs = _({})
  .merge(envConfig)
  .extend(args)
  .omit('$0', 'color', 'gulpfile', '_')
  .toPairs()
  .map(([key, value]) => [`--${key}`, value])
  .flatten()
  .concat('--disableChecks')
  .value();


function protractor() {
  console.log('protractorArgs:\t', protractorArgs);
  spawnSync('node', [...getProtractorBinary('protractor'), ...protractorArgs], {
    stdio: 'inherit',
  });
}


protractor();
