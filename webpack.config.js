let getPlugins = require('./webpack/plugins');
module.exports = (env) =>{
    let dev = env === 'dev';
    return {
        entry:{
            app:__dirname + '/src/index.jsx',
            vendor:['babel-polyfill','react','react-dom','prop-types','redux','react-redux','redux-saga','react-router-dom'],
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
                'core': __dirname + '/src/core/index.js',
            }
        },
        devServer:{
            historyApiFallback:true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        },
        plugins:getPlugins(dev,__dirname),
    }
}
