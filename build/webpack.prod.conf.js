const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const loadMinified = require('./load-minified')
const baseConfig = require('./webpack.base.conf')
const utils = require('./utils')
const appConfig = require('../src/appConfig')

const prodConfig = merge(baseConfig, {
  entry: {
    app: ['babel-polyfill', utils.resolve('src/index.js')]
  },
  output: {
    publicPath: '/zhihudaily/', // 二级目录
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader']
        }),
        include: [utils.resolve('src')]
      },
      {
        test: /\.p?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        }),
        include: [utils.resolve('node_modules')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash].css',
      allChunks: true
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: appConfig.htmlTitle,
      filename: 'index.html',
      template: utils.resolve('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency',
      serviceWorkerLoader: `<script>${loadMinified(
        path.join(__dirname, './service-worker-prod.js')
      )}</script>`
    }),
    new webpack.HashedModuleIdsPlugin(), // keep module.id stable when vender modules does not change
    new webpack.optimize.ModuleConcatenationPlugin(), // enable scope hoisting
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(utils.resolve('node_modules')) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static'),
        to: utils.resolve('static'),
        ignore: ['.*']
      }
    ]),
    // service worker caching
    new SWPrecacheWebpackPlugin({
      cacheId: 'vue-pwa',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/'
    })
  ]
})

module.exports = prodConfig
