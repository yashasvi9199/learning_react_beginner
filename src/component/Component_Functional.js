import REACT, { Component } from 'react'
// we need to import react for every component

function Greet(){
    return <h1>Hello User</h1>
}

//Using same in arrow function
const Greet2 = () => <h1>Hello User in arrow function</h1>

// export default Greet;
//export default Greet2;        If we do not comment/remove this, this will be forwarded to app.js instead of later.

{/* why export default?
 default exported Component can be named something else in App.js file
However, We can prevent that by this : */}

export const Greet3 = () => <h1>Hello User</h1>