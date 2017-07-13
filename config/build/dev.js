import webpack from 'webpack';
import glob from 'glob';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import * as ENV from './env';

export const JS_PATTERN = /\.(js|jsx)$/;
const FILE_PATTERN = /\.png$|\.jpg$|\.gif$|\.ico$|\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/;

const plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: path.resolve('./src', 'index.html'),
		inject: 'body'
	}),
	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: [
				autoprefixer(),
			]
		}
	})
];

/**
 * Libs and files that should not be parsed and processed by webpack
 * @type {Array}
 */
const noParse = [
	path.resolve(ENV.NODE_MODULES_PATH, ENV.CORE_JS),
	...glob.sync(path.join(ENV.LIB_PATH, '/*'), {
		ignore: ENV.ES6
	}).map(file => path.resolve(file))
];

/**
 * Aliases used during webpack module resolution
 * @type {{}}
 */
const alias = {};

module.exports = function() {
	const entry = [
		'react-hot-loader/patch',
		'./src/index.jsx',
	];

	return {
		entry: {
			main: entry,
		},
		output: {
			path: ENV.DIST_PATH,
			filename: '[name].js'
		},
		module: {
			rules: [
				{
					test: JS_PATTERN,
					exclude: [
						ENV.NODE_MODULES_PATH,
						...noParse
					],
					use: ['babel-loader']
				},
				{
					test: /\.styl$/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							}
						},
						'postcss-loader',
						{
							loader: 'stylus-loader',
							options: {
								use: [],
								nocheck: true,
								'include css': true,
								'resolve url': true,
								paths: [
									ENV.LIB_PATH
								]
							},
						},
					],
				},
				{
					test: FILE_PATTERN,
					use: [
						'file-loader'
					]
				}
			]
		},
		resolve: {
			modules: [
				ENV.NODE_MODULES_PATH,
				ENV.LIB_PATH
			],
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			alias
		},
		plugins
	};
};