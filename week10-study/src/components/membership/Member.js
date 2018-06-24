import React from 'react';
import ContentBox from './ContetnBox';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>고객님은 멤버쉽회원입니다</h1>
                <ContentBox/>
                <button onClick={this.props.onUnRegister}>해지하기</button>
            </div>
        )
    }
}