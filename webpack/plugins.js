const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new ExtractTextPlugin('css/app.css'),
    ];
    return plugins;
}