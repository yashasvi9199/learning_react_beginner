import React from 'react';

const curlyBraces = '{}';   //using this to render {} in JSX

//here props serves as a parameter in arraw function
const HeroesTesting = props => {
    console.log(props);     //printing the parameters in console
    return (
        <div>
            <p>This is what happens if we do not use {curlyBraces} in JSX while calling props</p>
            <h4>Hello props.name aka props.heroName</h4>
            props.children
            <br/>
            <u>VS how it looks with proper {curlyBraces}</u>
            <br/>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default HeroesTesting;