const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [/*{
            loader: 'eslint-loader',
            test:/\.js$/,
            exclude : /node_modules/,
            enforce : 'pre'
        },*/{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.css$/,
/*            use : [
                {
                    loader: 'style-loader'
                } ,
                {
                    loader:'css-loader',
                    options : {
                        modules : true,
                        localIdentName : '[name][hash:base64:5]',
                        minimize : true
                    }
                }
            ]*/
            use : ['style-loader','css-loader']
        }]
    }
};