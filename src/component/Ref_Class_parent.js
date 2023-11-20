import React, { Component } from 'react'
import Ref_Class_child from './Ref_Class_child'

class Ref_Class_parent extends Component {

    constructor(props) {
      super(props)
      this.parentRef = React.createRef()
    }

    focusChild = () => {
        this.parentRef.current.focusRef()
    }
    
  render() {
    return (
      <div>
        <Ref_Class_child ref={this.parentRef} />
        <button onClick={this.focusChild}>Focus Input</button>
      </div>
    )
  }
}

export default Ref_Class_parent
