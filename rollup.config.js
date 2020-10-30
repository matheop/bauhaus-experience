import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import "dotenv/config";

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const confPreProcess = {
	defaults: {
		script: "typescript",
		style: "sass",
	},
	postcss: {
		plugins: [require("autoprefixer")],
	},
	sass: {
		prependData: "@import 'src/style/_theme.sass'",
		renderSync: true,
	},
	sourceMap: dev,
};

//alias
const aliases = alias({
	resolve: [".js", ".ts", ".svelte"],
	entries: [
		{
			find: "svg",
			replacement: `${__dirname}/src/components/svg`,
		},
		{
			find: "ui",
			replacement: `${__dirname}/src/components/ui`,
		},
		{
			find: "kit",
			replacement: `${__dirname}/src/components/ui/kit`,
		},
		{
			find: "components",
			replacement: `${__dirname}/src/components`,
		},
		{
			find: "notifications",
			replacement: `${__dirname}/src/stores/notifications`,
		},
		{
			find: "stores",
			replacement: `${__dirname}/src/stores/`,
		},
		{
			find: "helpers",
			replacement: `${__dirname}/src/helpers`,
		},
	],
});

// ┌┐ ┌─┐┌┐ ┌─┐┬
// ├┴┐├─┤├┴┐├┤ │
// └─┘┴ ┴└─┘└─┘┴─┘

const babelConf = {
	extensions: [".js", ".mjs", ".html", ".svelte"],
	babelHelpers: "runtime",
	exclude: ["node_modules/@babel/**"],
	presets: [
		[
			"@babel/preset-env",
			{
				targets: "> 0.25%, not dead",
			},
		],
	],
	plugins: [
		"@babel/plugin-syntax-dynamic-import",
		[
			"@babel/plugin-transform-runtime",
			{
				useESModules: true,
			},
		],
	],
};

const onwarn = (warning, onwarn) =>
	(warning.code === "MISSING_EXPORT" && /'preload'/.test(warning.message)) ||
	(warning.code === "CIRCULAR_DEPENDENCY" && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	warning.code === "THIS_IS_UNDEFINED" ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input().replace(/\.js$/, ".ts"),
		output: config.client.output(),
		plugins: [
			aliases,
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				preprocess: sveltePreprocess(confPreProcess),
				emitCss: true,
			}),
			resolve({
				browser: true,
				dedupe: ["svelte"],
			}),
			commonjs(),
			typescript({ sourceMap: dev }),

			legacy && babel(babelConf),

			!dev &&
				terser({
					module: true,
				}),
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: { server: config.server.input().server.replace(/.js$/, ".ts") },
		output: config.server.output(),
		plugins: [
			aliases,
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode),
				"process.env.PORT": JSON.stringify(process.env.PORT),
			}),
			svelte({
				generate: "ssr",
				hydratable: true,
				preprocess: sveltePreprocess(confPreProcess),
				dev,
			}),
			resolve({
				dedupe: ["svelte"],
			}),
			commonjs(),
			typescript({ sourceMap: dev }),
		],
		external: Object.keys(pkg.dependencies).concat(require("module").builtinModules),

		preserveEntrySignatures: "strict",
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input().replace(/\.js$/, ".ts"),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode),
			}),
			commonjs(),
			typescript({ sourceMap: dev }),
			!dev && terser(),
		],

		preserveEntrySignatures: false,
		onwarn,
	},
};
