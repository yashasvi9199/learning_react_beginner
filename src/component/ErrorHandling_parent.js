import React from 'react'
import { useState } from 'react'

function ErrorHandling_parent() {

    const [heroes] = useState([
        {
            heroName: 'Super Man'
        },
        {
            heroName: 'Bat Man'
        }
        // ,
        // {
        //     heroName: 'Joker'
        // }
    ])

    const DC = heroes.map( (hero, index) => {
        if(hero.heroName === 'Joker'){
            throw new Error('Not A Hero')
        }else{
            return(
                <div key={index}>{hero.heroName}</div>)
        }
    })

  return (
    <div>
      {DC}
    </div>
  )
}

export default ErrorHandling_parent
