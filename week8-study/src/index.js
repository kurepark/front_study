import $ from 'jquery';
import {createAppStore, subscribe} from "./store";
import {Button, Div} from './components'; //폴더명만 쓰면 index.js를 읽어옴
import {increase,decrease} from "./actions/counter";
import {render} from "./renderer/render";
//import {createStore} from 'redux';

/*import * as redux from 'redux';
console.log(redux);*/ //콘솔에 리덕스 출력해보기

/*
* 스토어를 만들 땐 createStore에 리듀서 함수를 넣어서 호출
* */

//console.log(store); // {dispatch, subscribe, getState 등등 }
//window.store = store;

createAppStore();//const store = createStore(reducer);//스토어생성 - >store index.js

const app = $('#app');
app.append(Div({id:'count', children:0}));
app.append(Button({id:'btn-up', children: 'up'}));
app.append(Button({id:'btn-down', children: 'down'}));


$("#btn-up").on('click', increase);
$("#btn-down").on('click', decrease);

/*
* 스토어를 구독하면서 상태가 바뀌면 화면을 그리는 render함수를 호출
* */
subscribe(render);