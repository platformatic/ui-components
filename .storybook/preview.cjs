import '../src/styles/main.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }
  },
  backgrounds: {
    default: 'main-dark-blue',
    values: [
      {
        name: 'main-dark-blue',
        value: '#00283D',
      },
      {
        name: 'light-blue',
        value: '#E9F7FF',
      },
    ],
  }
}