import React from 'react'

function Click_functional() {

    function clickEvent() {
        alert("Clicked Function")
    }

  return (
    <div>
      <button onClick={clickEvent}>Click Function</button>
    </div>
  )
}

{/*

This part of code will never be excecuted as it non-reachable by the block. Even if we handle the event on button, it will stuck up at 'clickEvent() not defined'
Since this function is out of scope from the main block, it is un-reachable

    function clickMe() {
        clickEvent();
    }

*/}


export default Click_functional
