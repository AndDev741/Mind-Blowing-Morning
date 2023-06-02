// import React, { useState } from 'react'
import './Button.css'

type buttonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children? : string
  outline? : string
}
const btn = [ '1','2','3','4','5','6','7','8' ]
const Button = ( props : buttonProps) => {
  // console.log( children , outline )

    return (
    btn.map( ( element )=> <button className='btn' id={ element } >{ element }</button>  )
  )
}

export default Button