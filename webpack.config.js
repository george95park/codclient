const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    output: {
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: "./favicon.ico"
        }),
        new MiniCssExtractPlugin(),
        new StatsWriterPlugin({
            fields: null,
            stats: {chunkModules: true}
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'API_HOST': JSON.stringify(process.env.NODE_ENV === 'prod' ? process.env.HOST : 'http://localhost:8080')
            }
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}
