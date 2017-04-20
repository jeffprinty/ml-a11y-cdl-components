const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './demo');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './demo/src/index'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: [ 'babel-loader', 'eslint-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc',
          fix: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      path: './build',
      filename: 'index.html'
    })
  ]
};
