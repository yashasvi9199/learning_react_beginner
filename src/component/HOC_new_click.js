import React, { Component } from 'react'
import HOC from './HOC_component_counter'

export class HOC_new_click extends Component {
    
  render() {
    const {count, increaseCount} = this.props      //decontruction
    return (
      <div>
        <button onClick={increaseCount}>{this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default HOC(HOC_new_click, 5)
