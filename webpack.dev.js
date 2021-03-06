const merge = require('webpack-merge');
const { paths } = require('./webpack.constants.config');
const baseConfig = require('./webpack.common');

module.exports = merge.smart(baseConfig, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: paths.BUILD,
        port: '3001',
        historyApiFallback: true,
    },
});
