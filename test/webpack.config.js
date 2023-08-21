const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},
	devtool: 'inline-source-map',
    // devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
		disableHostCheck: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: [
					/node_modules/,
					path.resolve(__dirname, "../dist/box/master/index.js"),
					path.resolve(__dirname, "../dist/box/slaves/index.js")
				],
				use: {
					loader: 'babel-loader',
					options: {
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
					}
				}

			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'exdemo'
		}),
		new CopyWebpackPlugin([
			{from: 'src/wxs', to: 'wxs', force: true}
		])
	]
};
