import React from 'react';
import ContentBox from './ContetnBox';
import {Button, WingBlank} from 'antd-mobile';
import {connect} from 'react-redux';
import {unRegister} from "../../actions/membershipAction";

function Trial(props) {
        return (
            <div>
                <WingBlank>
                <h1>고객님은 30일 무료회원입니다</h1>
                <ContentBox/>
                <Button type="warning" onClick={props.unRegister}>해지하기</Button>
                </WingBlank>
            </div>
        )
    }


const mapSTP = (state) => {
    return {}
};
const mapDTP = {
    unRegister
};
export default connect(mapSTP, mapDTP)(Trial);