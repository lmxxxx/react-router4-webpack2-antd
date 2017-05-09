const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    index : './src/entries/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?modules&localIdentName=[local]_[hash:base64:5]&-autoprefixer',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer]
                }
              }
            }, 'less-loader']
        })
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
          // 按需加载antd
          plugins: [
            ['import', { 'libraryName': 'antd', 'style': 'css' }]
          ]
        }
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new ExtractTextPlugin({
      filename: 'index.min.css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
  ]
};