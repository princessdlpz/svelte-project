import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/styles/functions";@use "@unsass/breakpoint";'
			}
		}),
		mdsvex()
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$actions: './src/lib/actions',
			$styles: './src/styles',
			$utils: './src/utils',
			$assets: './src/assets',
	
		}
	},

	extensions: ['.svelte', '.svx']
};


export default config;
