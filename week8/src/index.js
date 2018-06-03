/*const $ = require('jquery');
const Div = require('./components/Div');
const Button = require('./components/Button');*/

import $ from 'jquery';
import {Div, Button} from './components'; //폴더만 지정해놓으면 폴더의 index.js를 바로 불러온다. 새로운 컴포넌트들이 생길때 import를 여러개 하는게 아니라 이런식으로 쓴다
// import Div from './components/Div';
// import Button from './components/Button'; //es6문법에서 쓰는 모듈 불러오는 방법, webpack에 의해 컴파일 된 결과물은 const require 와 같다

const app = $('#app');
app.append(Div({id: 'count', children: 0}));
app.append(Button({id: 'btn-up', children: 'up'}));
app.append(Button({id: 'btn-down', children: 'down'}));
// app.append(`<div id="count">0</div>`);
// app.append(`<button id="btn-up">up</button>`);
// app.append(`<button id="btn-down">down</button>`);

const model = {
    count: 0
}

$("#btn-up").on('click', () => {
    $('#count').text(++model.count);
});
$("#btn-down").on('click', () => {
    $('#count').text(--model.count);
});