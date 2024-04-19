module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {},
  "webpackFinal": async config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [{
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
          }
        }
      }],
      include: path.resolve(__dirname, '../')
    });
    return config;
  },
  docs: {
    autodocs: true
  },
  "staticDirs": [{ from: '../fonts', to: '/fonts' }]
};