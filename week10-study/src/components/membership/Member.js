import React from 'react';
import ContentBox from './ContetnBox';

export default class Member extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>고객님은 멤버쉽회원입니다</h1>
                <ContentBox/>
            </div>
        )
    }
}