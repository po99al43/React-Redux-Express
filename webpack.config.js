var webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        chat: './public/javascripts/chat/index.jsx',
        life: './public/javascripts/life/index.jsx',
        redux: './public/javascripts/redux/index.jsx'
    },
    output: {
        path: 'public/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
};
