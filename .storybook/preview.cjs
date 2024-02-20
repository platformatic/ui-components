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
    default: 'rich-black',
    values: [
      {
        name: 'rich-black',
        value: '#00050B',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  }
}