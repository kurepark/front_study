import React from 'react';
import Modal from 'react-modal';
import {Button, WingBlank} from 'antd-mobile';

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

export default class Guest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        }
    }
    render() {
        return (
            <div>
                <WingBlank>
                <h1>고객님은 멤버쉽 회원이 아닙니다</h1>
                <div>
                <Button onClick={() => {
                    this.setState({
                        isOpen : true
                    })
                }}>혜택보기</Button>
                <Button type="primary" onClick={this.props.onRegister}>가입하기</Button>
                </div>
                <Modal
                    isOpen={this.state.isOpen}
                    style={customStyles}
                >
                    <div>혜택!!!</div>
                    <Button onClick={()=>{
                        this.setState({
                            isOpen : false
                        })
                    }}>닫기</Button>
                </Modal>
                </WingBlank>
            </div>
        )
    }
}