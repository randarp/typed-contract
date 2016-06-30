var webpack = require("webpack"),
    path = require("path"),
    yargs = require("yargs");

var libraryName = "typedcontract",
    libraryFileName = "typed-contract",
    plugins = [],
    outputFile;

if (yargs.argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = libraryFileName + ".min.js";
} else {
    outputFile = libraryFileName + ".js";
}

var config = {
    entry: [
        __dirname + "/TypedContract/Contract/Contract.ts"
    ],
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: outputFile,
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
/*        preLoaders: [
            { test: /\.tsx?$/, loader: "tslint", exclude: /node_modules/ }
        ],*/
        loaders: [
            { test: /\.tsx?$/, loader: "ts", exclude: /node_modules/ }
        ]
    },
    resolve: {
        root: path.resolve("./TypedContract"),
        extensions: [ "", ".js", ".ts" ]
    },
    plugins: plugins,

    // Individual Plugin Options
    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};

module.exports = config;