var webpack = require('webpack'),
  path = require('path');
  HtmlWebpackPlugin = require('html-webpack-plugin');        //根据模板生产html文件
  ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取css到单独文件

module.exports = {
  entry:{
    // polyfill: [
    //   'es5-shim', 'es5-shim/es5-sham'
    // ],
    index: path.resolve('./src/index/js/index.js') //项目入口
  },
  output: {
    // publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ["es2015"]
        },
        plugins: ["transform-es3-property-literals", "transform-es3-member-expression-literals", "transform-es2015-modules-simple-commonjs"]
      }, {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath: '../'})
      }, {
          test: /\.less$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract('style-loader', 'css!less', {publicPath: '../'})
      }, {
        test: /\.tpl/,
        loader: "templatejs-loader",
        query: {
            sTag: '<#',
            eTag: '#>',
            expression: 'require("template_js")'
        }
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'url-loader?name=images/[name].[ext]&limit=10240'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html', //生成的文件名字
          template: 'index.html', //生成文件的 模板
          title: 'index page',
          inject: 'body',
          chunks: ['index']
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false,
              screw_ie8: false
          },
          mangle: {
              screw_ie8: false
          },
          output: {
              screw_ie8: false
          }
      }),
      new ExtractTextPlugin('css/[name].css')
  ]
}
