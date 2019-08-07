const path = require('path')
const htmlWebpackPulgin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/pulgins/request.js'),
    path.resolve(__dirname, 'src/assets/js/main.js')
  ],
  output: {
    path: path.resolve(__dirname, '/dist'),
    // filename: '[name].[hash].bundle.js'
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPulgin({
      title: 'vis 数据分析',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      // 压缩
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'dependency'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static'),
      path.resolve(__dirname, 'src')
    ],
    compress: true,
    host: 'localhost',
    port: 4000,
    hot: true,
    lazy: true,
    filename: 'bundle.js',
    headers: {
      'X-Custom-Foo': 'bar'
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/views/landing.html' },
        { from: /^\/subpage/, to: '/views/subpage.html' },
        { from: /./, to: '/views/404.html' },
      ]
    }
  }
}

module.exports = config