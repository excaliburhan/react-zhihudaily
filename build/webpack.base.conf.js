const utils = require('./utils')

const publicPath = '/zhihudaily/' // 二级目录

module.exports = {
  output: {
    path: utils.resolve('dist'),
    filename: '[name].js',
    publicPath
  },
  resolve: {
    alias: {
      '@': utils.resolve('src'),
      static: utils.resolve('static')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [utils.resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
