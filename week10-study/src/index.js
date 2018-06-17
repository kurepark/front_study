import React from 'react';
import ReactDom from 'react-dom';
import Counter from "../components/Counter";
import Button from "../components/Button";


ReactDom.render(
    <div>
        <Counter onClick={()=>{
            console.log(111);
        }}>{1000}</Counter>
        <Counter onClick={()=>{
            console.log(222);
        }}>{200}</Counter>
        <Counter onClick={()=>{
            console.log(333);
        }}>{150}</Counter>
        <Counter onClick={()=>{
            console.log(444);
        }}>{100}</Counter>
        <Button type="primary">버튼1</Button>
        <Button type="warning">버튼2</Button>
        <Button type="danger">버튼3</Button>
        <Button>버튼4</Button>
    </div>, document.getElementById('app')
)

