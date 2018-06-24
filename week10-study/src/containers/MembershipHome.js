import React from 'react';
import {Guest,Trial,Member} from '../components/membership/index';
import MainDrawer from "../components/MainDrawer";

class MembershipHome extends React.Component {
    constructor() {
        super();
        this.state = {
            membershipLevel : 'guest'
        }
        this.onRegister = this.onRegister.bind(this);//onRegister에는 this를 바인딩 한다.
        //onRegister의 this를 항상 멤버쉼홈의 this로 박아버림.
        this.onUnRegister = this.onUnRegister.bind(this);
    }
    //클래스의 메소드로 변경
    onRegister(){
        alert('30일 제한으로 가입되었습니다');
        console.log(this);//undefined
        //함수의 this는 선언이 아니라 실행되는 방법에 의해서 결정.
        //실행은 아래 게스트.js안에 있는 가입하기 버튼의 온클릭일때 실행.
        //따라서 this.setState의 this가 undefined.
        this.setState({
            membershipLevel : 'trial'
        });
    }
    onUnRegister(){
        alert('멤버쉽이 해지되었습니다');
        this.setState({
            membershipLevel : 'guest'
        });
    }

    withMainDrawer(component){
        return (
            <MainDrawer>
                {component}
            </MainDrawer>
        );
    }
    render() {
        switch (this.state.membershipLevel) {
            case 'guest' : return this.withMainDrawer(<Guest onRegister={this.onRegister} />); //함수자체를 전달
            case 'trial' : return this.withMainDrawer(<Trial onUnRegister={this.onUnRegister} />);
            case 'member' : return this.withMainDrawer(<Member onUnRegister={this.onUnRegister} />);
            default : return <Guest/>;
        }
    }
}

export default MembershipHome;
