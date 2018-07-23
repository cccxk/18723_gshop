const path = require('path'); //node内置的模块用来去设置路径的
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/entry.js', //入口文件的配置
    output: { //输出的配置
        filename: 'bundle.js', //输出的文件名
        //__dirname：根目录 与后面参数拼接而成路径
        path: path.resolve(__dirname, 'dist/js/'),
        //publicPath:'js/'//设置为index.html提供资源服务的时候带有强制性（不推荐）
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }, {
                test: /.scss$/,
                loader: 'style-loader!css-loader!scss-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
]
},
devServer: {
        contentBase: 'dist/' //webpack-dev-server默认服务于根路径下 index.html
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]

};
