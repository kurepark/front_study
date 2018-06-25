import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import ReactDom from 'react-dom';
import Counter from "./components/Counter";
import Button from "./components/Button";
import App from './containers/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers,compose, applyMiddleware} from 'redux';//스토어생성
import MembershipHome from './containers/MembershipHome';
import membershipLevelReducer from "./reducers/membershipLevelReducer";

const store = createStore(
    combineReducers({
        membershipLevel : membershipLevelReducer
    }),
    compose(
        applyMiddleware(thunk),
        __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
    )
);
console.log(store);

ReactDom.render(
       // <App/>
    //리액트리덕스에는 프로바이더라는 컴포넌트가 있다. 스토어라는 속성에 우리가 만드는 스토어를 넣으면 어디서든 데이터를 가지고 올수 있다
    <Provider store={store}>
        <MembershipHome/>
    </Provider>
    , document.getElementById('app')
)

