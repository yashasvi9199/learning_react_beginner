import React from 'react'

function Memo({name}) {  //deconstructing the props
  console.log("CHILD COMPONENT")
  return (
    <div>
      Hello {name}
    </div>
  )
}

export default React.memo(Memo)
