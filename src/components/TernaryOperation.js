import React, { Component } from 'react'

export class TernaryOperation extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLogged: true
        }
      }
  
      changeLog = () => {
          if(this.state.isLogged){
              this.setState({
                  isLogged: false
              })
          }else{
              this.setState({
                  isLogged: true
              })
          }

        //Short Circuit operation
        !this.state.isLogged && alert('welcome') //over here I used exclaimation to not not true condition.
      }
      
  
    render() {
  
      let message

      //Ternary Operation for rendering
      this.state.isLogged ? message = `Welcome ${this.props.name}` : message = 'Please log-in'

        //Short Circuit operation
        //this.state.isLogged && console.log('welcome')

      return (
        <div>
          <h1>{message}</h1>
          <button onClick={this.changeLog}>Login</button>
        </div>
      )
    }
  }

export default TernaryOperation
