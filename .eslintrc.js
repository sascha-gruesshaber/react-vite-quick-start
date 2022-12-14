// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		'cypress/globals': true,
		//"jest": true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:cypress/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'cypress'],
	ignorePatterns: ['/*.js'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		camelcase: 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'spaced-comment': 'error',
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',

		'@typescript-eslint/no-empty-function': 'off',

		'react/react-in-jsx-scope': 'off',
	},
}
