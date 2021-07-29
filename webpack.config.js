const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "eval",

    entry: "./src/index.jsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            //
            // Loading styles
            //
            {
                test: /\.css$/,
                use: [ isProd ? MiniCssExtractPlugin.loader : "style-loader", "css-loader"]
            },
            //
            // Loading images
            //
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            //
            // Loading fonts
            //
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Movie Finder",
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        open: true,
        compress: true,
        port: 8000,
        historyApiFallback: true,
        hot: true,
    },
};
