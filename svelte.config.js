import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		target: '#svelte',
		adapter: vercel(),
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
