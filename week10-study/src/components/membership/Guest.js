import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {Button, WingBlank} from 'antd-mobile';
import axios from 'axios';
import {changeMembershipLevel} from "../../actions/membershipAction";
import MembershipLevelType from "../../enums/MembershipLevelType";
import BenefitAdder from '../../components/BenefitAdder';

const customStyles = {
    content : {
        top :'50%',
        left: '50%',
        right : 'auto',
        bottom : 'auto',
        marginRight : '-50%',
        transform : 'translate(-50%,-50%)'
    }
};

Modal.setAppElement('#app');

class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            benefits : []
        };
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <WingBlank>
                <h1>고객님은 멤버쉽 회원이 아닙니다</h1>
                <div>
                <Button type="default" onClick={() => {
                    this.setState({
                        isOpen : true
                    })
                }}>혜택보기
                </Button>
                    <Button type="default" onClick={()=>{this.props.changeMembershipLevel(MembershipLevelType.TRIAL);}}>30일 가입하기</Button>
                    <Button type="primary" onClick={()=>{this.props.changeMembershipLevel(MembershipLevelType.MEMBER)}}>정회원 가입하기</Button>
                </div>
                <Modal
                    isOpen={this.state.isOpen}
                    style={customStyles}
                >
                    <Button onClick={()=>{
                        this.setState({
                            isOpen : false
                        });
                        axios.get('http://192.168.0.36:1337/benefits')
                            .then(result => {console.log(result)
                                this.setState({
                                    benefits : result.data
                                })
                            })
                            .catch(err => console.log(err));
                    }}>닫기</Button>
                    <div>
                        <ul>
                            {this.state.benefits.map((benefit)=>{
                                return (
                                    <li key={benefit.id}>
                                        {benefit.description}<br/>
                                        {benefit.createdAt}

                                    </li>
                                )
                            })}
                        </ul></div>
                </Modal>
                    <BenefitAdder />
                </WingBlank>
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return{
        membershipLevel : state.membershipLevel
    }
};
const mapDispatchToProps  = {
  changeMembershipLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(Guest);