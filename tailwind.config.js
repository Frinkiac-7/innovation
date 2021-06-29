module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			backgroundImage: theme => ({
				'pathway': "url('src/assets/innovation-office-pathways.jpg')"
				// 'footer-texture': "url('/img/footer-texture.png')",
	 		})
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
