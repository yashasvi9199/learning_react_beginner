import React from 'react'

function ListRenderin_03() {

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

    const heroes = heroName.map(person => <h3>{person.name} is {person.hero} </h3>)

  return (
    <div>
      {heroes}
    </div>
  )
}

export default ListRenderin_03
