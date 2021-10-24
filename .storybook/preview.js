import '../src/index.css';
import { withTests } from "@storybook/addon-jest";
import { withPerformance } from 'storybook-addon-performance';
import results from '../src/.jest-test-results.json';

export const decorators = [
  withTests({
    results, withPerformance
  }),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
