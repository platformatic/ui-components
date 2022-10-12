/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {},
    colors: {
      'main-green': '#21FA90',
      'dark-green': '#02783F',
      'main-dark-blue': '#00283D',
      'dark-blue': '#00344F',
      white: '#FFFFFF',
      'error-red': '#FA2121'
    },
    fontFamily: {
      sans: ['Montserrat']
    }
  },

  plugins: []
}
