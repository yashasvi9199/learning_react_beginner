import React from 'react'

function ListRendering_02() {
    const names = ['Diana', 'Bruce', 'Clark']
    const names2 = ['Robert', 'Peter', 'Natalia']

    const MCU = names2.map(mcuHero => <h3>{mcuHero}</h3>)

  return (
    <div>
      <h1>DC Super-Heroes</h1>
      {names.map(dcHero => <h3>{dcHero}</h3>)}

      <br />
      <h1>MCU Super-Hero</h1>
      {MCU}
    </div>
  )
}

export default ListRendering_02
