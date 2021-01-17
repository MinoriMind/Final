const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports =
{
    entry: "./src/index.js",
    output:
    {
        path: path.resolve("dist"),
        filename: "bundle.js",
        publicPath: "./"
    },
    module:
    {
        rules: 
        [
            {
                test: /\.html$/,
                use:
                [ 
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    devServer:
    {
        contentBase: path.join(__dirname, "dist"),
        port: 9090
    },
    plugins:
    [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id],css"
        })
    ]
}
