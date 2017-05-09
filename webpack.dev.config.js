const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index : ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/entries/index.js'],
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader?modules&localIdentName=[local]_[hash:base64:5]', 'less-loader']
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [ 'es2015', { modules: false } ],
            'stage-0',
            'react'
          ],
          plugins: [
            ['import', { 'libraryName': 'antd', 'style': 'css' }]
          ]
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
  ]
};