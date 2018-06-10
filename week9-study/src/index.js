import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/Counter';

ReactDom.render(
    <div>
        <Counter onClick = {() => {
            console.log(1234);
        }}></Counter>
    </div>, document.getElementById('app')
);