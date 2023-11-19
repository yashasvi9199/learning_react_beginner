import React, {Component} from 'react';
//{Component} indicates we are declaring a class as component in React

//the class needs to be extended to a Component to be used in App.js as it can only inherit return/functions of a class
class Welcome extends Component{
    //The class needs to reder something to show
    //results can then be shown in return (either null or something in HTML)
    render(){
        return <h1>This is a Statefull Class Component</h1>
    }
}

export default Welcome;
