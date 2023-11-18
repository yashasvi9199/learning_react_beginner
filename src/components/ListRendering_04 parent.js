import React from 'react'
import ListRendering_04_child from './ListRendering_04 child'

function ListRenderin_04_parent() {

    const heroName = [
        {
            name : 'Peter Parker',
            hero : 'Spider Man'
        },
        {
            name : 'Clark',
            hero : 'Super Man'
        }
    ]

    const heroes = heroName.map(person => <ListRendering_04_child key={person.name} props = {person} />) 
    //giving component ListRendering_04_child a prop. which is actually the parameter in our map
    // key prop is reserved and cannot be used in child component.
    // Key helps react in understanding UI updates where same parameter will reserve multiple value in different instances
    // The value passed at key should be unique

  return (
    <div>
      {heroes}
    </div>
  )
}

export default ListRenderin_04_parent
