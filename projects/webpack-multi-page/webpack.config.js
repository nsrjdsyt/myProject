var path = require("path"); //webpack升级到2.0以后，路径需要引用这个模块
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/pages/index/main.js',
        test: './src/pages/test/main.js',
        common: './src/pages/common/constant.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js' //区分文件有[name], [hash], [chunkhash]
    },
    module: {
        rules: [
            {
                test: /\.js$/, //用正则匹配找到所有的js文件
                include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
                exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
                exclude: path.resolve(__dirname, 'node_modules'), //排除node_modules文件下js，注意需是绝对路径
                use: [
                    {
                        loader: 'style-loader'
                    }, //注意先后顺序，一般都要先用css-loader处理完然后用style-loader生成style标签,但webpack读取的顺序是从右到左
                    {
                        loader: 'css-loader'
                    }
                ]
            }, {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'), //指定babel-loaders寻找的文件路径，注意需是绝对路径
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
            }, {
                test: /\.tpl$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'art-template-loader'
                }
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
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
            chunks: ['index','common'] //注意是数组
        }),
        new htmlWebpackPlugin({
            filename: 'test.html', //生成的文件名字
            template: 'index.html', //生成文件的 模板
            title: 'test page',
            inject: 'body',
            chunks: ['test', 'common']
        })
    ],
    devtool: "cheap-module-eval-source-map"
}
