import React from 'react'
import './Button.css'
const Button = (   {children, outline } ) => {
  console.log( children , outline )
    return (
    <button className={ `btn ${ outline }` } >
        {
            children 
        }
    </button>
  )
}

export default Button