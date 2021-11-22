module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        title: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#090909',
        secondary: '#6100EE',
        background: '#F9F9F9',
        paper: '#F1F1F1',
      },
    },
  },
}
