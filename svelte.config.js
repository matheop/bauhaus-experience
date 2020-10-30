// svelte.config.js
const preprocess = require("svelte-preprocess");

module.exports = {
	preprocess: preprocess({
		defaults: {
			script: "typescript",
			style: "sass",
		},
		sass: {
			prependData: "@import 'src/style/_theme.sass'",
			renderSync: true,
		},
		postcss: {
			plugins: [require("autoprefixer")],
		},
	}),
	// ...other svelte options could go here
};
