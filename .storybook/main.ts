import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
