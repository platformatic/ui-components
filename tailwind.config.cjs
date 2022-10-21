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
      'light-green': '#21F190',
      'main-dark-blue': '#00283D',
      'dark-blue': '#00344F',
      white: '#FFFFFF',
      'error-red': '#FA2121',
      'tertiary-blue': '#2588E4'
    },
    fontFamily: {
      sans: ['Montserrat']
    }
  },
  safelist: [
    'border-error-red',
    'border-main-green'
  ],
  plugins: []
}
