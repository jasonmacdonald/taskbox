module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "stories": ['../src/components/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    "@washingtonpost/storybook-addon-web-vitals",
    "@storybook/addon-graphql",
    '@storybook/addon-jest',
    'storybook-addon-performance/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: false,
        },
      },
    },
  ]
}
