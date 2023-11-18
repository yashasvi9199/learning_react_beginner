import React, {useState} from 'react'
import './StyleSheet.css'


function StyleSheet_1(props) {

    const classAttr = 
        props.isProp ? 'primary' : ''
    

    //Button functionality
    const [hiddenAttr, setAttr] = useState(props.isProp)

    function changeAttr(){
        hiddenAttr ? setAttr(false) : setAttr(true)
        console.log(hiddenAttr) 
        //sicne react is asyncronous, the console will always be printed before the changes are made to variable hiddenAttr
        //which mean the current value is opposite to what is being shown
    }

  return (
    <div>
      <div className='primary font-italica' hidden={hiddenAttr}>This is styles text with useState</div>
      <div className={`${classAttr} font-XL`} >This is Functional text based on prop input</div>
      <button onClick={changeAttr}>Click</button>
    </div>
  )
}

export default StyleSheet_1
