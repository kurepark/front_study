import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modal')


export default class Guest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        }
    }

render(){
    return (
    <div>
        <h1>고객님은 팔콘 멤버십 회원이 아닙니다</h1>
        <div>
            <button>혜택보기</button>
        </div>
        <div>
            <button onClick={this.props.onRegister}>가입하기</button>
        </div>
        <Modal id={modal}
        isOpen={this.state.isOpen}
        style={customStyles}
        >
            <button>닫기</button>
            <div>혜택!!!!!!!!</div>
        </Modal>
    </div>

    );
}
    }

//컴포넌트 만드는방식에 따라, 함수-클래스
//역할에 따른 컴포넌트 구분방식
//dumb컴포넌트 - 컴포넌트 - css나 뷰를 그리는건 여기서
//smart컴포넌트 - 컨테이너 / 뷰나 이런게 있는게 아니라 로직을 불러오거나 컴포넌트를 추가하는것