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
        primary: '#6000EE',
        secondary: '#6100EE',
        background: '#121212',
        paper: '#292929',
      },
    },
  },
}
