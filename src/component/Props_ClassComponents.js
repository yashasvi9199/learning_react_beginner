import React, {Component} from 'react';

class HeroesClass extends Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.name} aka {this.props.heroName}</h1>
                {this.props.children}
            </div>
        ) 
    }
}

export default HeroesClass;