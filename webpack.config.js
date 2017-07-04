const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
module.exports = (env) =>{
    return {
        entry:{
            app:__dirname + '/src/index.jsx',
            vendor:['babel-polyfill','react','react-dom','prop-types','redux','react-redux','react-router-dom','react-router-redux'],
        },
        output:{
            path:__dirname + '/dist/',
            publicPath:'',
            filename:'js/[name].js'
        },
        module:{
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015','stage-0','react']
                    }
                }
            ]
        },
        resolve: {
            extensions:['.js', '.jsx', '.json', '.scss', '.css'],
            alias:{
                'mockRequest': __dirname + '/src/mock/request.js',
            }
        },
        devServer:{
            historyApiFallback:true,
            hot:true,
            inline:true,
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'react',
                template:__dirname + '/html/index.html',
                filename:'index.html',
                hash:true,
                inject:'body',
                chunks:['vendor','app'],
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor'),
            new webpack.HotModuleReplacementPlugin()
        ],
    }
}
