const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsConfigPathsPlugin({}));
    return config;
  },
};
