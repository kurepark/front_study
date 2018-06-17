import React from 'react';
//컴포넌트 만드는 방식은 일반함수와 클래스로 만드는 방법 두가지가 있다.
//클래스에선 props를 리턴할때 this.props를 해야한다
//라이프사이클을 확인하며 작업할땐 클래스를 사용해야한다

//클래스로 컴포넌트 만들기
class Counter extends React.Component {//리액트이므로 리액트를 상속시켜준다
/*    constructor() {
        console.log('constructor!!');
        super();
    }*/
/*    componentDidMount() { //렌더가 모두 완료 된 후에 호출된다/react lifecycle
        console.log('componentDidMount');
    }*/
    render() {//클래스로 만들땐 렌더라는 메소드안에서 jsx를 리턴해서 사용
        console.log('render!!');
        return (
            <div onClick={this.props.onClick}>
                <div>
                    카운터 컴포넌트야 챵현찡
                </div>
                <div>
                <span>
                    {this.props.children}
                </span>
                </div>
            </div>
        )
    }

}
export default Counter;//export default는 이렇게 하단에 적어줘도 된다

/* //react일반 함수로 만들기
export default function Counter(props) {
    console.log(props);
    return (
        <div onClick={props.onClick}>
            <div>
                카운터 컴포넌트야 챵현찡
            </div>
            <div>
                <span>
                    {props.children}
                </span>
            </div>
        </div>
    )
}*/

/*
* 함수형이 더 간단하지만 클래스형태로 써야하는 경우가 있다
* */
