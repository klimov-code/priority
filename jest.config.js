module.exports = {
  clearMocks: true,

  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/Definitions/**/*',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/styled.ts',
    '!<rootDir>/src/**/*.(spec|test).{ts,tsx}',
    '!<rootDir>/src/__tests__/**/*',
  ],
  coverageDirectory: 'coverage',

  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: { '^~/(.*)$': '<rootDir>/src/$1' },

  rootDir: '.',

  setupFilesAfterEnv: ['jest-dom/extend-expect', 'react-testing-library/cleanup-after-each'],

  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__tests__/**/*.(spec|test).{ts,tsx}'],
};
