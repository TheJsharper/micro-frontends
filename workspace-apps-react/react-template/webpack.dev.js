const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Development simple react template'),
            'process.env.version': JSON.stringify('1.0.0'),


        })
    ]


}