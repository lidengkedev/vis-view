const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-pligin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin()
    ]
})