import React from 'react';
import ContentBox from './ContetnBox';
import Modal from 'react-modal';

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
export default class Trial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false,
            membershipLevel : super()
        }
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({isOpen: false, membershipLevel:'guest'});
        console.log(this.state.membershipLevel);
        alert('무료기간 중 탈퇴가 완료되었습니다')
    }
    render() {
        return (
            <div>
                <h1>고객님은 30일 무료회원입니다</h1>
                <ContentBox/>
                <button onClick={()=>{
                    this.setState({
                        isOpen:true
                    })
                }}>해지하기</button>
                <Modal
                    isOpen={this.state.isOpen}
                    style={customStyles}
                    onRequestClose={this.closeModal}
                >
                    <div>회원이십니다. 탈퇴하시겠습니까?</div>
                    <button onClick={this.closeModal}>확인</button>
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