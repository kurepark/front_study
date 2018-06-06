import $ from 'jquery';
import {createAppStore, subscribe} from './store';
import {Div, Button} from './components';
import {decrease, increase} from "./actions/counter"; //폴더만 지정해놓으면 폴더의 index.js를 바로 불러온다. 새로운 컴포넌트들이 생길때 import를 여러개 하는게 아니라 이런식으로 쓴다
import {render} from './renderer/render';

createAppStore();//스토어 생성

const app = $('#app');
app.append(Div({id: 'count', children: 0}));
app.append(Button({id: 'btn-up', children: 'up'}));
app.append(Button({id: 'btn-down', children: 'down'}));

$("#btn-up").on('click', increase);
$("#btn-down").on('click',decrease);

subscribe(render);

