import React from 'react';
import ContentBox from './ContetnBox';

export default class Trial extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>고객님은 30일 무료회원입니다</h1>
                <ContentBox/>
            </div>
        )
    }
}