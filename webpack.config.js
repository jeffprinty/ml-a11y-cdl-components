const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const sourcePath = path.join(__dirname, './demo');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './demo/src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(example|md)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:  ['es2015', 'stage-0']

          }
          
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
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
    new CopyWebpackPlugin([
      { from: './demo/style.css', to: 'style.css' }
    ]),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, 'index.html'),
      path: './build',
      filename: 'index.html'
    
    })
  ],
  devServer: {
    hot: true,
    contentBase: './demo'
  }
};
