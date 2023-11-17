import React from 'react'

function ListRendering_01() {
    const names = ['Diana', 'Bruce', 'Clark']
  return (
    <div>
      <h1>DC Super-Heroes</h1>
      <h3>{names[0]}</h3>
      <h3>{names[1]}</h3>
      <h3>{names[2]}</h3>
    </div>
  )
}

export default ListRendering_01
