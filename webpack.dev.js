const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8085,
    historyApiFallback: true,
    headers: { 
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials" : true 
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(common, config);
