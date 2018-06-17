import React from 'react';
/*import Guest from "../components/membership/Guest";
import Trial from "../components/membership/Trial";
import Member from "../components/membership/Member";*/
import {Member,Trial,Guest} from "../components/membership";

class member extends React.Component {
    constructor() {
        super();
        this.state = {
            membershipLevel : 'guest'
        }
    }
    render() {
        switch (this.state.membershipLevel) {
            case 'guest' : return <Guest onRegister={()=>{
                alert('30일 무료로 가입되었습니다!')
            this.setState({
                membershipLevel : 'trial'
            })
            }}/>;
            case 'trial' : return <Trial/>;
            case 'member' : return <Member/>;
            default : return <Guest/>;
        }
/*        return (
            <div>
                {this.state.membershipLevel === 'guest' && <Guest/>}
                {this.state.membershipLevel === 'trial' && <Trial/>}
                {this.state.membershipLevel === 'member' && <Member/>}
            </div>
        );*/
    }
}

export default member;