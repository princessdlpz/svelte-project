import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

const config = {
	preprocess: preprocess({
		scss: {
			prependData: '@use "../styles/functions";\n@use "@unsass/breakpoint";'
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$styles: './src/styles',
			$utils: './src/utils'
		}
	}
}


export default config;
