module.exports = {
	preset: "jest-puppeteer",
	transform: {'^.+\\.ts?$': 'ts-jest'},
	testEnvironment: 'node',
	testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	collectCoverageFrom: [
		"src/**/*.{ts,tsx,js,jsx}"
	],
	coveragePathIgnorePatterns: [
		"src/domain/all-it-ebooks/puppeteer-mapping.ts"
	]
  };
  