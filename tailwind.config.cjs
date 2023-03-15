/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        lg: '1440px'
        // => @media (min-width: 1440px) { ... }
      },
      boxShadow: {
        wrap: '0px 0px 20px rgba(0, 0, 0, 0.6)',
        'main-green': '0px 0px 6px rgba(33, 250, 144, 0.5)',
        'dark-green': '0px 0px 6px rgba(2, 120, 63, 1)',
        'light-green': '0px 0px 6px rgba(33, 241, 144, 0.5)',
        'main-dark-blue': '0px 0px 6px rgba(33, 250, 144, 0.5)',
        'dark-blue': '0px 0px 6px rgba(0, 52, 79, 0.5)',
        'light-blue': '0px 0px 6px rgba(233, 247, 255, 0.5)',
        'error-red': '0px 0px 6px rgba(250, 33, 33, 0.5)',
        'tertiary-blue': '0px 0px 6px rgba(37, 136, 228, 0.5)'
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
      transparent: 'transparent',
      'warning-yellow': '#FEB928'
    },
    fontFamily: {
      sans: ['Montserrat']
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      'more-widest': '.15em',
      'super-widest': '.25em'
    }
  },
  safelist: [
    'text-error-red',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl'
  ],
  plugins: []
}
