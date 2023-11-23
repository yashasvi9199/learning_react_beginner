import React, { useState } from 'react'

function Map_child(props) {

    const [inputData] = useState([
        {
            src: props.imgSrc,
            name: props.imgName
        }
    ])

  return (
    <div>
      {inputData.map( (image, index) => {
        return(
            <div key={index}>
                <img src={image.src} alt='DP' style={{ width: '100px', height: '100px' }}/>
                <h3>Name : {image.name}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default Map_child
