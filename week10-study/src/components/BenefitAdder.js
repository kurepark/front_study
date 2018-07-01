import React from 'react';
import axios from 'axios';

class BenefitAdder extends React.Component {
    constructor() {
        super();
        this.state = {
            value : ''
        }
    }
    submit(e){
        e.preventDefault();
        axios.post('http://192.168.0.36:1337/benefits',{
                description : this.state.value
            }).then(result => {
                this.setState({
                    value :''
                })
        })
            .catch(error => console.error(error))
    }
    onChangeHandler(e) {
        //console.log(e.target.value);
        this.setState({
            value : e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                <input
                    type="text"
                    onChange={(e) => this.onChangeHandler(e)}
                    value = {this.state.value}
                />
                    <button onClick={(e) => this.submit(e)}>
                        전송
                    </button>
                </form>
            </div>
        );
    }
}

export default BenefitAdder;