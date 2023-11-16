import React, { Component } from 'react'

class EventBinding_setState extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Please click to subscribe!'
      }

    // Approach 3.
      this.clickEvent = this.clickEvent.bind(this)
    }
    
    clickEvent(){
        this.setState({
            message: 'Thanks you for Subscribing'
        })
    }

    //Approach 4.
    clickEvent4 = () => {
        this.setState({
            message: 'Thanks you for Subscribing'
        })
    }

    //Reset 
    resetEvent = () => {
        this.setState({
            message: 'Please click to subscribe!'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* This does not work unless Approach 3 is used */}
        <button onClick={this.clickEvent}>Default</button>

        {/* Approach 1. */}
        <button onClick={this.clickEvent.bind(this)}>Approach 1</button>

        {/* Approach 2. (remember to use () after class property/function as noted earlier) */}
        <button onClick={() => this.clickEvent()}>Approach 2</button>

        {/* Approach 4. button */}
        <button onClick={this.clickEvent4}>Approach 4</button>
        <br />

        {/* Reset Button */}
        <button onClick={this.resetEvent}>Reset</button>

      </div>
    )
  }
}

export default EventBinding_setState
