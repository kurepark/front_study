import React from 'react';
import {Guest,Trial,Member} from '../components/membership/index';

class MembershipHome extends React.Component {
    constructor() {
        super();
        this.state = {
            membershipLevel : 'guest'
        }
    }
    render() {
        switch (this.state.membershipLevel) {
            case 'guest' : return <Guest onRegister={() => {
            alert('30일 제한으로 가입되었습니다');
            this.setState({
                membershipLevel : 'trial'
            })
            }} />;
            case 'trial' : return <Trial/>;
            case 'member' : return <Member/>;
            default : return <Guest/>;
        }
    }
}

export default MembershipHome;
