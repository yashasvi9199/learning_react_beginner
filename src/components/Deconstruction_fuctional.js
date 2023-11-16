import React from 'react';


//Convectionsal default method
const DeconsDefault = props => {
    return (
        <div>
            <h1>Hello {props.fname} {props.lname} </h1>
        </div>
    )
}

//Deconstruction in Parameters
const DeconsParam = ({fname, lname}) => {
    return (
        <div>
            <h1>Hello {fname} {lname} </h1>
        </div>
    )
}

//Deconstruction in function body
const DeconsElement = props => {
    const {fname,lname} = props
    return (
        <div>
            <h1>Hello {fname} {lname} </h1>
        </div>
    )
}

export default DeconsDefault;