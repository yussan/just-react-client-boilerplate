const webpack = require('webpack')
const path = require('path')
const target_dir = '../../dist/'
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        app: ['./src/index.js']
    },

    output: {
        path: path.resolve(__dirname, target_dir),
        filename: '[name].js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            } 
        }),
        new CopyWebpackPlugin([
            {"from": path.resolve(__dirname, "../index.html"), "to": path.resolve(__dirname, "../../dist")}
        ])
    ],

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]             
            }
        ]
    }

}