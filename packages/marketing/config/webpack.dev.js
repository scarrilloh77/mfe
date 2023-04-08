const { merge } = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new htmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); //that means that the dev config is going to override or kind of take priority over any other similar options that we might have assigned to common config.
