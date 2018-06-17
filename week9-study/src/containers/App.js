import React from 'react';
import Button from '../components/Button';
import Counter from '../components/Counter';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count1 : 1000,
            count2 : 200,
            count3 : 150,
            count4 : 0
        };
        console.log('constructor');
        
    }
    componentDidMount(){
        console.log('componentDidMount');
        
    }
   /* shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
    }*/
    render() {
        console.log('render');
        
        return (
            <div>
                <Counter onClick = {() => {
                    //this.state.count1 = this.state.count1 + 1;
                    this.setState({
                       count1 : this.state.count1 + 1
                    });
                    console.log(this.state.count1);
                }}>{this.state.count1}</Counter>
                <Counter onClick = {() => {
                    this.setState({
                       count2 : this.state.count - 2
                    })
                    console.log(this.state.count2);
                }}>{this.state.count2}</Counter>
                <Counter onClick = {() => {
                    this.setState((state) => {//setState는 객체와 함수도 받을 수 있다
                        return {
                            count3 : state.count3 * 2
                        };
                    });
                }}>{this.state.count3}</Counter>
                <Button type="primary">버튼1</Button>
                <Button type="danger">버튼2</Button>
                <Button type="warning">버튼3</Button>
                <Button>버튼4</Button>

                <Counter>
                    {this.state.count4}
                    <div>
                        <button onClick={() => {
                            this.setState((state)=> {
                                return {
                                    count4 : state.count4 + 1
                                }
                            })
                        }}>+</button>
                        <button onClick={() => {
                            this.setState(state => ({//파라미터가 하나일땐 ()지워도 된다
                                    count4 : state.count4 -1
                            }))//객체 하나만 보내줄땐 return없이 소괄호로 묶어서
                        }}>-</button>
                    </div>
                </Counter>
            </div>
        );
    }
}

export default App;

/*
* Home.js를 만든다
* 회원의 상태는 3가지
* 1. guest
* 2. trial
* 3. member
* */