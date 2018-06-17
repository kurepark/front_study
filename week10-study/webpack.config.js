const path = require('path');

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'main.js'
    },
    module : {
        rules : [/*{
            loader: 'eslint-loader',
            test: /\.js$/,
            exclude : /node_modules/,
            enforce : 'pre'
        },*/{
            test: /\.js$/,
            loader : 'babel-loader',
            exclude : /node-modules/
        },{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    }
}