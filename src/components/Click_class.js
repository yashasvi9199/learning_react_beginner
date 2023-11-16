import React, { Component } from 'react'

class Click_class extends Component {
  
    clickEvent() {
        alert("Clicked Class")
    }

    render() {
    
  return (
    <div>
      <button onClick={() => this.clickEvent()}>Click Class</button>
    </div>
  )
  }
}

export default Click_class
