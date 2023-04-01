const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production', // When we set mode to production that's gonna cause webpack to run slightly differently. It's gonna make sure that all the JavaScript files that are built get somewhat optimized. Takes a little bit longer to run webpack in production mode. However, it's gonna make sure that we get a much more production-specific build coming out.
  output: {
    filename: '[name].[contenthash].js', // So this ensures that whenever we build some files for production, all the different files that are built are gonna use this as a template to figure out how to name them. We're gonna first put down the name of the file that was created, and then a hash of the contents of the file. This is done primarily for caching issues.
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
