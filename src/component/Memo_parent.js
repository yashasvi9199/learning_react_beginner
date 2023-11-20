import React, { Component } from 'react'
import Memo_child from './Memo_child'

export class Memo_parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Peter'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Peter'
            })
        }, 2000)
    }

  render() {
    console.log('****** Parent Component  ******')
    return (
      <div>
        <h2>Parent Componet</h2>
        <Memo_child name={this.state.name} />
      </div>
    )
  }
}

export default Memo_parent
