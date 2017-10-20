var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');        //根据模板生产html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //提取css到单独文件

module.exports = {
    entry: {
        index: './src/pages/index/main.js',
        test: './src/pages/test/main.js',
        common: './src/pages/common/js/constant.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
    },
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
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', "postcss-loader", 'sass-loader']
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
                        loader: 'file-loader?name=asset/[hash].[ext]'
                    }, {
                        loader: 'img-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html', //生成的文件名字
            template: 'index.html', //生成文件的 模板
            title: 'index page',
            inject: 'body',
            chunks: ['index','common']
        }),
        new htmlWebpackPlugin({
            filename: 'test.html', //生成的文件名字
            template: 'index.html', //生成文件的 模板
            title: 'test page',
            inject: 'body',
            chunks: ['test', 'common']
        }),
        new ExtractTextPlugin('css/[name].css')
    ],
    devtool: "cheap-module-eval-source-map"
}
