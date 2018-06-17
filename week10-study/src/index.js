import React from 'react';
import ReactDom from 'react-dom';
import Counter from "./components/Counter";
import Button from "./components/Button";
import App from './containers/App';
import MembershipHome from './containers/MembershipHome';


ReactDom.render(
       // <App/>
    <MembershipHome/>
    , document.getElementById('app')
)

