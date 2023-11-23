import React, { useState } from 'react'
import Map_child from './Map_child'

function Map_parent() {

    const [data ] = useState([
        {
            img : 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            name: 'Angelo'
        },
        {
            img : 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
            name: 'Derek'
        },
        {
            img : 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
            name: 'Shubham'
        },
        {
            img : 'https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg',
            name: 'Lucy'
        }

    ])

    const dataArr = data.map((src, index) => {
        return(<Map_child imgSrc={src.img} imgName={src.name} key={index}/>)
        
    })

  return (
    <div>
        {dataArr}    
    </div>
  )
}

export default Map_parent
