import React from "react";

class DeconsDefault extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.fname} {this.props.lname} </h1>
            </div>
        )
    }
}

class DeconsClass extends React.Component{
    render(){
        const {fname, lname} = this.props
        return (
            <div>
                <h1>Hello {fname} {lname} </h1>
            </div>
        )
    }
}

export default DeconsClass;