import $ from 'jquery';
import {Button, Div} from './components'; //폴더명만 쓰면 index.js를 읽어옴

const app = $('#app');
app.append(Div({id:'count', children:0}));
app.append(Button({id:'btn-up', children: 'up'}));
app.append(Button({id:'btn-down', children: 'down'}));

const model = {
    count : 0
}

$("#btn-up").on('click', () => {
   $("#count").text(++model.count);
});
$("#btn-down").on('click', () => {
   $("#count").text(--model.count);
});
