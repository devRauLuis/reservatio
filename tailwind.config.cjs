const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fonts: {
				google: ['Product Sans', 'sans-serif'],
				nunito: ['Nunito Sans', 'sans-serif'],
			},
			colors: {
				golden: '#8F8023',
				coral: '#F87060',
			},
			borderRadius: { DEFAULT: '5px' },
		},
	},
	plugins: [],
};

module.exports = config;
