import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import "../styles/functions";\n@use "@unsass/breakpoint";`
			}
		}),
		mdsvex()
	],

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$styles: './src/styles',
			$utils: './src/utils'
		}
	},

	extensions: ['.svelte', '.svx']
};


export default config;
