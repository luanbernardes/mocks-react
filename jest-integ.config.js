console.log('RUNNING INTEGRATION TESTS');
const config = require('./jest.config');
module.exports = {
  ...config,
  testRegex: 'integ\\.spec\\.ts(x)?$',
  coverageDirectory: 'coverage-integration',
  coveragePathIgnorePatterns: [...config.coveragePathIgnorePatterns, '.spec.ts|tsx'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};
