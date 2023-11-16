import React from 'react'

export default function MethodsProps_child(props) {
  return (
    <div>
      <button onClick={() => props.greeting('child')}>Greet Parent</button>
    </div>
  )
}
