const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf.js");

module.exports = merge(baseWebpackConfig, {
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [
                        [
                            "env", {
                                targets: {
                                    chrome: 100,
                                    // "browsers": ["last 2 versions", "safari 7"]
                                },
                                modules: false,
                                loose: true
                            },
                        ],
                        "stage-1",
                    ],
                    plugins: []
                }
            },
        ]
    }
});
