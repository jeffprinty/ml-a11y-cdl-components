const webpack = require('webpack');
const path = require('path');

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
    })
  ]
};
