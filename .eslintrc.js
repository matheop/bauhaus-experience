module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
	},
	plugins: ["svelte3", "cypress"],
	extends: ["eslint:recommended", "prettier", "plugin:cypress/recommended"],
	overrides: [
		{
			files: ["**/*.svelte"],
			processor: "svelte3/svelte3",
		},
	],
	rules: {
		"no-unused-vars": [
			"warn",
			{
				vars: "all",
				args: "none",
			},
		],
	},
	settings: {
		"svelte3/ignore-styles": () => {
			return true;
		},
	},
};
