const webpackConfig = require('./webpack/webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');


webpackConfig.plugins.push(new CleanWebpackPlugin(['reports'], {root: path.join(__dirname, '..')}));

webpackConfig.module.rules = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        query: {
            compilerOptions: {
                inlineSourceMap: true,
                sourceMap: false
            }
        }
    },
    {
        test: /\.ts$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            'node_modules',
            /\.test\.tsx?$/
        ]
    }
];

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: ['tests/**/*.spec.ts'],
        exclude: [],
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        preprocessors: {
            'src/**/*.ts': ['webpack'],
            'tests/**/*.ts': ['webpack']
        },
        webpack: {
            mode: 'development',
            devtool: 'inline-source-map',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['mocha', 'junit', 'coverage-istanbul'],
        junitReporter: {
            outputDir: 'reports',
            useBrowserName: true,
        },
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'cobertura'],
            dir: path.join(__dirname, 'reports'),
            combineBrowserReports: false,
            fixWebpackSourcePaths: true,
            'report-config': {
                cobertura: {
                    xml: true,
                },
                html: {
                    subdir: 'html'
                }
            },
        },
        client: {
            captureConsole: true,
            mocha: {
                bail: false
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    });
};

