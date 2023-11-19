import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor',
            counter : 0
        }
    }
    
    changeMessage(){

        if(this.state.counter === 0){
            this.setState({
                message: 'Thank you for subscribing'
            }, () => {
                this.setState({
                    counter: 1
                })
            })
        } else {
            this.setState({
                message: 'You have already subscribed!'
            })
        }
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;