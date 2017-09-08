const _ = require('lodash');

const dev = {
  'params.spaUrl': 'http://www.protractortest.org/testapp/ng1/',
  'cucumberOpts.tags': [
    '@tryIt_1',
    '@tryIt_2',
    '@tryIt_3',
    '@tryIt_4',
    '@tryIt_5',
  ].join(' or '),
};

const envMap = {
  development: dev,
};

const config = _.get(envMap, process.env.NODE_ENV, envMap.development);

module.exports = {
  config,
};

