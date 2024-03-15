module.exports = {
  passWithNoTests: true,
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  rootDir: '.',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/*/(?!(.pnpm|@truepay|@mui|@firebase|firebase)/.*)'
  ],
  globals: {
    '@swc/jest': {
      compact: false,
      tsconfig: 'tsconfig.json'
    }
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/@fixtures/*',
    '<rootDir>/src/@types/*',
    '.integ.spec.(ts|tsx)',
    'index.(ts|tsx)',
    '.mock.(ts|tsx)'
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/stories/',
    '<rootDir>/public/',
    '<rootDir>/cypress/',
    '.cache'
  ],
  watchPathIgnorePatterns: ['.cache'],
  testRegex: '(?<!integ\\.)spec\\.ts(x)?$',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@fixtures/(.*)$': '<rootDir>/src/@fixtures/$1',
    '^@types(.*)$': '<rootDir>/src/@types/$1',
    '^@types$': '<rootDir>/src/@types'
  }
};
