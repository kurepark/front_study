import React from 'react';
import ContentBox from './ContetnBox';
import {Button} from 'antd-mobile';

export default class Trial extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>고객님은 30일 무료회원입니다</h1>
                <ContentBox/>
                <Button type="warning" onClick={this.props.onUnRegister}>해지하기</Button>
            </div>
        )
    }
}