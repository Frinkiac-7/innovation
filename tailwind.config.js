module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			backgroundImage: theme => ({
				'pathway': "url('src/assets/innovation-office-pathways.jpg')",
				'opendata': "url('src/assets/jared-arango-1-mh6U3qeGQ-unsplash.jpg')",
				'team': "url('src/assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg')",
				// 'footer-texture': "url('/img/footer-texture.png')",
	 		})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
