const path = require('path');
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

console.log(__dirname);

module.exports = {
    mode: 'production',
    entry: './src/food-app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}