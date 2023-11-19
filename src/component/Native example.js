import React from 'react';

const Native_Hello = () => {
    
    {/*
    JSX Version for code

    return(
        <div id='hello' className='dummyClass'>
            <h1>Hello JSX User</h1>
        </div>
    )
    */}

    //Native Version for code

     return React.createElement('div',
    {id: 'Hello', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Native User')
    )
}

export default Native_Hello;