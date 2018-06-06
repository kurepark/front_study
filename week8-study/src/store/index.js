import {createStore} from 'redux';


//리듀서 함수
/*
* 함수명은 꼭 리듀서가 아니어도 된다
* */
function reducer(state = { count: 0 }, action) {
    //console.log('state',state); //{count : 0}
    //console.log('action',action);//{type : "@@redux/INITt.o.1.t.l.r" }

    switch(action.type) {
        case 'INCREASE/COUNT' : {
            return {
                count : state.count + 1
            }
        }
        case 'DECREASE/COUNT' : {
            return {
                count : state.count -1
            }
        }
    }
    return state;
}

let store;
export function createAppStore () {
    store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__&&__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
export function dispatch (action) {
    store.dispatch(action);
}
export function getState() {
    return store.getState();
}
export function subscribe (callback) {
    store.subscribe(callback)
}

