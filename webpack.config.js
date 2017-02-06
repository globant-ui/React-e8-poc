var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');
var PRODUCTION = process.env.NODE_ENV === 'production'

var config = {
  context: path.join(__dirname, 'client'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    root: [
      path.join(__dirname, 'client')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '<Title goes here>',
      filename: 'index.html',
      template: 'index.tmpl.html',
      inject: 'body',
      hash: true
    })
  ]
}

if (!PRODUCTION) {
  config.devtool = 'eval'
}

module.exports = config
