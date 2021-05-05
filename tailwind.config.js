module.exports = {
   purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#696eec',
        secondary: '#cccef0',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
