import React, { Component } from 'react'

export class ErrorHandling_child extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    
  render() {
    if(this.state.hasError){
        return(
            <h1>Something went wrong. Check hero names</h1>
        )
    }else{
        return this.props.children
    }
  }
}

export default ErrorHandling_child
