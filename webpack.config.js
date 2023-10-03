const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');

module.exports = {
  mode: 'production',
  output: { clean: true },
  module: {
    rules: [
      { test: /\.scss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(ico|svg)$/i, type: 'asset' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src', 'index.html'),
      favicon: resolve('src', 'assets', 'favicon.ico'),
      title: 'ER Some Project'
    }),
    new WebpackObfuscator(),
    new Dotenv({ systemvars: true }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@assets': resolve('src', 'assets'),
      '@components': resolve('src', 'components'),
      '@helpers': resolve('src', 'helpers'),
    },
  },
  target: 'web',
  optimization: { minimize: true, minimizer: [new TerserPlugin()], splitChunks: { chunks: 'all' } },
  performance: { maxEntrypointSize: 512000, maxAssetSize: 512000 },
};
