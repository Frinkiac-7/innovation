module.exports = {
  purge: {
		enabled: true,
		content: [
			'./src/**/*.html',
			'./src/**/*.css'	
		]
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
				'img-team': "url('src/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg')",
				'img-kiosk': "url('src/assets/digital-kiosk.jpg')",
				'img-opendata': "url('src/assets/opendataportal.png')",
				// 'footer-texture': "url('/img/footer-texture.png')",
	 		}),
		},
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
