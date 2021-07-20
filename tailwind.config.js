module.exports = {
  purge: {
		enabled: true,
		content: ["./src/app/**/*.{html,ts}"]
	},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				'rich-black-fogra-39': '#0a0903',
				'metallic-sunburst': '#a08e60',
				amazon: '#4a7759',
				auburn: '#a52229',
				'mint-green': '#f7fff7',
				button: '#557761',
				card: '#a09270'
			},
			backgroundImage: theme => ({
				'img-pathway': "url('src/assets/innovation-office-resized.jpg')",
				'img-opendata': "url('src/assets/jared-arango-1-mh6U3qeGQ-unsplash.jpg')",
				'img-team': "url('src/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg')",
				// 'footer-texture': "url('/img/footer-texture.png')",
	 		}),
		},
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
