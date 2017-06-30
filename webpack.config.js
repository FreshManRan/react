const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

module.exports = (env) =>{
    let _publicPath = env === 'dev' ? '' : '/dist/';
    return {
        entry:{
            app:__dirname + '/src/index.jsx',
            vendor:['react','react-dom']
        },
        output:{
            path:__dirname + '/dist/',
            publicPath:_publicPath,
            filename:'js/[name].js'
        },
        module:{
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['react']
                    }
                }
            ]
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
