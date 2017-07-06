const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const LiveReloadPlugin = require('webpack-livereload-plugin');
const url = require('url')
const publicPath = '/assets/'

// var path = require('path')

module.exports = (options = {}) => ({
    entry: {
        index: './src/main.js'
    },
    output: {
        filename: 'app.js',
        path: resolve(__dirname, 'js'),
        // filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        // chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '~': resolve(__dirname, 'src')
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map',
    performance: {
        hints: false
    },
    plugins:[
        // new LiveReloadPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: "false",
            debug: "false",
            // options: {
            // }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor', 'manifest']
        // }),
        // new HtmlWebpackPlugin({
        //     template: 'src/index.html'
        // })
    ]
})

console.log('NODE_ENV:'+process.env.NODE_ENV)

process.traceDeprecation = true

if (process.env.NODE_ENV === 'production') {

    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
