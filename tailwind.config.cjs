/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      boxShadow: {
        'wrap': '0px 0px 20px rgba(0, 0, 0, 0.6)'
      }
    },
    colors: {
      'main-green': '#21FA90',
      'dark-green': '#02783F',
      'light-green': '#21F190',
      'main-dark-blue': '#00283D',
      'dark-blue': '#00344F',
      'light-blue': '#E9F7FF',
      white: '#FFFFFF',
      'error-red': '#FA2121',
      'tertiary-blue': '#2588E4',
      'transparent': 'transparent'
    },
    fontFamily: {
      sans: ['Montserrat']
    }
  },
  safelist: [
    'border-error-red',
    'border-main-green',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl'
  ],
  plugins: []
}
