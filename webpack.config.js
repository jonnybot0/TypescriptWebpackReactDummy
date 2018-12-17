const path = require("path");
const webpack = require('webpack')

module.exports = (env, args) => ({
    context: __dirname,
    entry: [
        "./src/components/MyComponent.tsx"
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.js"
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react'
        }),
    ],

    /**
     * Bundle rules and handlers.
     */
    module: {
        rules: [
            /**
             * Handle Typescript
             */
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
        ]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
        modules: [
            'node_modules'
        ],
    },

    /**
     * Generate full source-maps for asset files, passing
     * "cheap-eval-source-map" will speed up build times.
     */
    devtool: "inline-source-map",

    /**
     * Setup file watchers to compile JavaScript and CSS whilst
     * in development mode.
     */
    watch: args.mode === "development",
});
