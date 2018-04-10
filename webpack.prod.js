const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const config = {
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    })
  ]
};

module.exports = merge(common, config);
