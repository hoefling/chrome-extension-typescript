const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        bundle: path.join(__dirname, '..', 'src', 'bootstrap.ts'),
        'app/background/background': path.join(__dirname, '..', 'app', 'background', 'background.js'),
        'app/content/injected': path.join(__dirname, '..', 'app', 'content', 'injected.js'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        // clean the build folder
        new CleanWebpackPlugin(['build', 'dist'], {root: path.join(__dirname, '..')}),
        // copy files
        new CopyWebpackPlugin([
            {from: '_locales/**/*'},
            {from: 'app/**/*.css'},
            {from: 'res/icons/*.png'},
            {
                from: 'src/manifest.json',
                transform: (content, path) => {
                    // generates the manifest file using the package.json informations
                    return Buffer.from(JSON.stringify({
                        name: process.env.npm_package_name,
                        description: process.env.npm_package_description,
                        version: process.env.npm_package_version,
                        ...JSON.parse(content.toString())
                    }))
                }
            },
        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'app', 'options', 'simple.options.html'),
            filename: 'app/options/simple.options.html',
            chunks: ['simple.options']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'app', 'action_browser', 'hello.browser.html'),
            filename: path.join('app', 'action_browser', 'hello.browser.html'),
            chunks: ['hello.browser']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'app', 'action_page', 'hello.page.html'),
            filename: path.join('app', 'action_page', 'hello.page.html'),
            chunks: ['hello.page']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'app', '_components', 'footer', 'footer.tpl.html'),
            filename: path.join('app', '_components', 'footer', 'footer.tpl.html'),
            chunks: ['footer.tpl']
        }),
    ]
};
