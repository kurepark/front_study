import React from 'react';
import ContentBox from './ContetnBox';
import Modal from 'react-modal';
import Guest from "./Guest";

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

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        }
    }
    render() {
        return (
            <div>
                <h1>고객님은 멤버쉽회원입니다</h1>
                <ContentBox/>
                <button onClick={()=>{
                    this.setState({
                        isOpen: true
                    })
                }}>해지하기</button>
                <Modal
                    isOpen={this.state.isOpen}
                    style={customStyles}
                >
                    <div>회원이십니다. 탈퇴하시겠습니까?</div>
                    <button onClick={()=>{
                        this.setState({
                            isOpen:false
                        })
                        alert('멤버쉽 탈퇴가 완료되었습니다')
                        return <Guest/>
                    }}>확인</button>
                    <button onClick={()=>{
                        this.setState({
                            isOpen : false
                        })
                    }}>취소</button>
                </Modal>
            </div>
        )
    }
}