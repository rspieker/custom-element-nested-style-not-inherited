import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');
const dev = Boolean(process.env.ROLLUP_WATCH || process.env.DEVELOP);

export default [
	{
		input: pkg.svelte,
		output: [
			{
				file: 'dist/component.js',
				format: 'iife',
				name: 'Sample',
			},
			{
				file: 'dist/component.mjs',
				format: 'es',
			},
		],
		plugins: [
			svelte({ dev }),
			resolve({ browser: true }),
		],
	},
	{
		input: pkg.svelte,
		output: [
			{
				file: 'dist/element.js',
				format: 'iife',
				name: 'Sample',
			},
			{
				file: 'dist/element.mjs',
				format: 'es',
			},
		],
		plugins: [
			svelte({ dev, customElement: true }),
			resolve({ browser: true }),
		],
	},
];
