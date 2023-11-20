import React, { Component } from 'react'

class Ref_Class_child extends Component {
    
    constructor(props) {
      super(props)
      this.childRef = React.createRef()
    }

    focusRef = () => {
        this.childRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.childRef}/>
      </div>
    )
  }
}

export default Ref_Class_child
