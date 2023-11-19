import React, { Component } from 'react'

export class If_Else extends Component {

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
        const stat = this.state.isLogged
        console.log(stat)
    }
    

  render() {

    let message
    if(this.state.isLogged){
        message = `Welcome ${this.props.name}`

        return (
            <div>
              <h1>{message}</h1>
              <button onClick={this.changeLog}>Logout</button>
            </div>
          )

    }else{
        message = 'Please log-in'

        return (
            <div>
              <h1>{message}</h1>
              <button onClick={this.changeLog}>Login</button>
            </div>
          )
    }
  }
}

export default If_Else
