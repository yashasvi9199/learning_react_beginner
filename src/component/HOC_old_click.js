import React, { Component } from 'react'

export class HOC_old_click extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increaseCount = () => {
        this.setState(prev => {
            return{count: prev.count +1}
        })
    }
    
  render() {
    const {count} = this.state      //decontruction
    return (
      <div>
        <button onClick={this.increaseCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HOC_old_click
