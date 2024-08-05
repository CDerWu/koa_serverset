var path = require("path");
var webpack = require("webpack");
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);


module.exports = {
    entry: {
        vendor: [path.join(__dirname, "public", "dll", "vendors.js")]
    },
    output: {
        path: path.join(__dirname, "public", "dll", process.env.NODE_ENV),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "public", "dll", process.env.NODE_ENV, "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "public", "dll", process.env.NODE_ENV)
        })
    ]
};