const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Production simple react template'),
            'process.env.version': JSON.stringify('1.0.0'),

        }),
        new BundleAnalyzerPlugin()
    ]
}