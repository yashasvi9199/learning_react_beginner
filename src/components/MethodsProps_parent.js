import React, { Component } from 'react';
import MethodsProps_child from './MethodsProps_child';

class MethodsProps_parent extends Component {
    constructor(props) {
    super(props)

    this.state = {
        parentName : 'Parent'
    }
}

greetParent = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`)
}

  render() {
    return (
      <div>
        <MethodsProps_child greeting={this.greetParent} />
      </div>
    )
  }
}

export default MethodsProps_parent
