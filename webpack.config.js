module.exports = {
    entry: './index.js',
    target: 'web',
    output: {
        path: './dist',
        filename: 'main.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            { test: /\.html$/, loader: 'html' }
        ]
    }
}