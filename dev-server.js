const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.dev.config.js');
const compiler = webpack(webpackConfig);

module.exports = function (app) {
	app
  .use(webpackDevMiddleware(compiler, {
    noInfo: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    publicPath: '/',
    stats: {
      colors: true
    },
    historyApiFallback: true,
  }))
  .use(webpackHotMiddleware(compiler))
}