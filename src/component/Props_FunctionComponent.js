import React from 'react';

const HeroesFunction = props => {
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default HeroesFunction;