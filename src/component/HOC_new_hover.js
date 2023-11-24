import React, { Component } from 'react'
import HOC from './HOC_component_counter'

export class HOC_new_hover extends Component {
      
  render() {
    const {count, increaseCount} = this.props      //decontruction
    return (
      <div>
        <div onMouseOver={increaseCount}>Hovered {count} times</div>
      </div>
    )
  }
}

export default HOC(HOC_new_hover, 10)
