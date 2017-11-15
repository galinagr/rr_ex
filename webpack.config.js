// entry -> output
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
      },
    module: {
        rules: [{
        loader:'babel-loader',
        test: /\.(js|jsx)$/,
        query: {
            presets: [
                require.resolve('babel-preset-es2015'),
                'react',
                'stage-0'
            ]
        },
        exclude: /(node_modules|bower_components)/,
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
      ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};