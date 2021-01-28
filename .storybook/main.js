const path = require("path")
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsConfigPathsPlugin({}))
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../"),
    })
    return config
  },
}
