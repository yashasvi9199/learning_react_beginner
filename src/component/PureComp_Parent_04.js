import React, { Component, PureComponent } from 'react'
import PureComp_Pure from './PureComp_Pure'
import PureComp_Regular from './PureComp_Regular'

export class PureComp_Parent_02 extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Peter'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Clark'
            })
        }, 2000)
    }

  render() {
    console.log('****** Parent Component  ******')
    return (
      <div>
        <h2>Parent Componet</h2>
        <PureComp_Pure prop = {this.state.name} />
        <PureComp_Regular prop = {this.state.name} /> 
      </div>
    )
  }
}

export default PureComp_Parent_02
