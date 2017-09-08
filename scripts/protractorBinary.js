const path = require('path');


module.exports = function getProtractorBinary(binaryName) {
  const ext = /^win/.test(process.platform) ? '.cmd' : '';
  const pkgPath = require.resolve('protractor');
  const protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));

  return [`${path.join(protractorDir, binaryName)}${ext}`];
};
