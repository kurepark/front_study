import React from 'react';
import {connect} from 'react-redux';
import {Guest,Trial,Member} from '../components/membership/index';
import MainDrawer from "../components/MainDrawer";
import MembershipLevelType from "../enums/MembershipLevelType";

class MembershipHome extends React.Component {
    constructor(props) {
        super(props);
       /* this.state = {
            membershipLevel : MembershipLevelType.GUEST
        };*/
        this.onRegister = this.onRegister.bind(this);//onRegister에는 this를 바인딩 한다.
        //onRegister의 this를 항상 멤버쉼홈의 this로 박아버림.
        this.onUnRegister = this.onUnRegister.bind(this);

        console.log(this.props)
    }
    //클래스의 메소드로 변경
    onRegister(membershipLevelType){
        if(membershipLevelType === MembershipLevelType.TRIAL){
            alert('30일 회원에 가입되었습니다');
        }else{
            alert('멤버쉽에 가입되었습니다');
        }
        this.setState({
            membershipLevel : MembershipLevelType
        });

        console.log(this);//undefined
        //함수의 this는 선언이 아니라 실행되는 방법에 의해서 결정.
        //실행은 아래 게스트.js안에 있는 가입하기 버튼의 온클릭일때 실행.
        //따라서 this.setState의 this가 undefined.
    }
    onUnRegister(){
        alert('멤버쉽이 해지되었습니다');
        this.setState({
            membershipLevel : MembershipLevelType.GUEST
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
        const {GUEST,TRIAL,MEMBER} = MembershipLevelType;//한 함수안에서 여러번쓸땐 이렇게 해체.
        switch (this.props.membershipLevel) {
            case GUEST : return this.withMainDrawer(
                <Guest/>); //함수자체를 전달
            case TRIAL : return this.withMainDrawer(<Trial />);
            case MEMBER : return this.withMainDrawer(<Member />);
            default : return <Guest/>;
        }
    }
}
const mapStateToProps = (state) => {
    //console.log('mapStateToProps:', state );
    return {
        membershipLevel : state.membershipLevel
    };
};
export default connect(mapStateToProps)(MembershipHome);//return할때 커넥트함수로
