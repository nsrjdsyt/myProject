var webpack = require('webpack')
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin'); //根据模板生产html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取css到单独文件

module.exports = {
  entry: {
    useRem: './src/useRem/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  module: {
    rules: [
      {
        test: /\.js$/, //用正则匹配找到所有的js文件
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader", publicPath: '../'})
      }, {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', "postcss-loader", 'sass-loader'],
          publicPath: '../'
        })
      }, {
        test: /\.tpl$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'art-template-loader'
        }
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader?name=images/[name].[ext]&limit=40'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //生成的文件名字
      template: 'index.html', //生成文件的 模板
      title: 'index page',
      inject: 'body',
      chunks: ['useRem']
    }),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
