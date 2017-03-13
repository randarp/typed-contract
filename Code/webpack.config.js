var webpack = require("webpack"),
    path = require("path"),
    yargs = require("yargs");

var libraryName = "typedcontract",
    libraryFileName = "typedcontract-lib",
    plugins = [],
    outputFile = "./TypedContract/" + libraryFileName + ".js";

var config = {
    entry: [
        __dirname + "/TypedContract/Contract/Contract.ts"
    ],
    output: {
        path: __dirname,
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.ts?$/,
                use: "source-map-loader"
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: true,
                    failOnHint: true
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "./TypedContract"),
            "node_modules"
        ],
        extensions: [ ".js", ".ts" ]
    },
    plugins: plugins,
};

module.exports = config;