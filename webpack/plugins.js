const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (dev,dirname) => {
    let plugins = [
        new HtmlWebpackPlugin({
            title:'react',
            template:dirname + '/html/index.html',
            filename:'index.html',
            hash:true,
            inject:'body',
            chunks:['vendor','app'],
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor')
    ];
    //package 用 --hot了
    // if(dev){
    //     plugins.push(new webpack.HotModuleReplacementPlugin());
    // }

    return plugins;
}