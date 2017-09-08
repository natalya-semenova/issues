const { spawnSync } = require('child_process');


const getProtractorBinary = require('./protractorBinary');

function webdriverUpdate() {
  spawnSync('node', [...getProtractorBinary('webdriver-manager'), 'update'], {
    stdio: 'inherit',
  });
}


webdriverUpdate();
