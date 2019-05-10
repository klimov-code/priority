module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.(spec|test).ts',
    '!<rootDir>/src/__*__/**/*',
  ],
  coverageDirectory: 'coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  rootDir: '.',
  setupFilesAfterEnv: ['jest-dom/extend-expect', 'react-testing-library/cleanup-after-each'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__tests__/**/*.(spec|test).ts'],
};
