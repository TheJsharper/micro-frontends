const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src'),
                use: [{
                    loader: 'babel-loader'
                }],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, './src'),
                use: [
                    'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                include: path.resolve(__dirname, './src'),
                type: 'asset/resource',
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new ModuleFederationPlugin({
            name: 'carts',
            filename: 'remoteEntry.js',
            exposes: {
                './Carts': path.resolve(__dirname, './src/App.tsx'),
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^19.1.0'
                },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^19.1.0'
                },
                'react-router-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^7.6.0'
                },
                'react-router': {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^7.6.0'
                },
                bootrap: {
                    singleton: true,
                    eager: true,
                    requiredVersion: '^5.3.6'
                },
            }
        })  
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 8081,
        historyApiFallback: true,
    }
}
