//웹팩을 설정하기 위한 파일, 설정이 없다면 dist에 main.js라는 이름으로 웹팩의 기본설정대로 만들어진다. 
//이곳에 설정을 해야 내가 원하는 루트에 원하는 파일명으로 나온다

const path = require('path');
module.exports = {
  entry: './src/index.js', //index.js를 받아서
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'index.bundle.js' //index.bundle.js로 보낸다
  },
    module: {
      rules : [{
          loader : "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
      }]
    }
};