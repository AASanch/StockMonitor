const path = require("path");
const DIST_DIR = path.resolve(__dirname, "wwwroot", "dist");
const SRC_DIR = path.resolve(__dirname, "ClientApp");

module.exports = {
    entry: SRC_DIR + "/index.tsx",
    output: {
        filename: "bundle.js",
        path: DIST_DIR
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: "development",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

};