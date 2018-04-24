const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const baseConfig = require('./webpack.base.conf')
const utils = require('./utils')
const appConfig = require('../src/appConfig')
const appName = require('../package.json').name

const devConfig = merge(baseConfig, {
  devtool: 'inline-source-map',
  entry: {
    app: ['babel-polyfill', 'react-hot-loader/patch', utils.resolve('src/index.js')]
  },
  output: {
    /* 这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协 */
    filename: '[name].[hash].js'
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: '0.0.0.0',
    // contentBase: utils.resolve('dist),
    port: 3000,
    open: false,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    proxy: {},
    quiet: true // necessary for FriendlyErrorsPlugin
  },
  module: {
    rules: [
      {
        test: /\.p?css$/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
          'postcss-loader'
        ],
        include: [utils.resolve('src')]
      },
      {
        test: /\.p?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: [utils.resolve('node_modules')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: appConfig.htmlTitle,
      filename: 'index.html',
      template: utils.resolve('public/index.html'),
      inject: true,
      serviceWorkerLoader: `<script>${fs.readFileSync(
        path.join(__dirname, './service-worker-dev.js'),
        'utf-8'
      )}</script>`
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = 3000
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // add port to devServer config
      devConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [`${appName} is running here: http://localhost:${port}`]
          }
        })
      )

      resolve(devConfig)
    }
  })
})
