var path = require('path');

module.exports = {
    entry: [
        "./entry.js",
        "./style.css"
    ],
    output: {
        path: __dirname + "/build/META-INF/resources/build",
        filename: "bundle.js",
        publicPath: "build/"
    },
    module: {
        loaders: [
            { test: /\.jpe?g$|\.gif$|\.png$/i, loader: "file-loader" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'html' }
        ]
    }
};