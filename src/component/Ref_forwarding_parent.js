import React, { Component } from 'react'
import Ref_forwarding_child from './Ref_forwarding_child'

class Ref_forwarding_parent extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

    focusRef = () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <Ref_forwarding_child ref={this.inputRef} />
        <button onClick={this.focusRef}>Focus</button>
      </div>
    )
  } 
}

export default Ref_forwarding_parent
