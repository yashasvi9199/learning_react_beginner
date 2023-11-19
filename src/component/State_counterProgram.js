import React from "react";

class Counter extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment(){
        this.setState((prevState) => ({
            count: prevState.count +1
        }))
    }

    incrementOne(){
        this.increment()
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <div><h1>Current Counter : {this.state.count}</h1></div>
                <button onClick={()=> this.incrementOne()}>+1</button>   <button onClick={() => this.incrementFive()}>+5</button>
            </div>
        )
    }
}

export default Counter;