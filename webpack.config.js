const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            //
            // Loading styles
            //
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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
    plugins: [
        new HtmlWebpackPlugin({
            title: "Web app",
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
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
}