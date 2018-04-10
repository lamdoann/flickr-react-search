const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: ['babel-polyfill', path.join(APP_DIR, 'index.js')],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: APP_DIR,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: path.join(APP_DIR, 'index.html'),
      path: BUILD_DIR,
      inject: 'body',
    }),
  ]
};

module.exports = config;
