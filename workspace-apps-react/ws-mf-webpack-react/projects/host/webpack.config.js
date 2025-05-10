
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
                test: /\.(scss)$/,
                include: path.resolve(__dirname, './src/styles'),
                use: [
                    'style-loader', 'css-loader', 'sass-loader', {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
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
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                "carts": 'carts@http://localhost:8081/remoteEntry.js',
                "products": 'products@http://localhost:8083/remoteEntry.js',
                "orders": 'orders@http://localhost:8082/remoteEntry.js',
            },
            //remotes:['products'],
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
        port: 8080,
        historyApiFallback: true,
    }
}
