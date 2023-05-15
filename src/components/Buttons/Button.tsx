import React from 'react'
import './Button.css'

type buttonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children? : string
  outline? : string
}

const Button = ( props : buttonProps) => {
  // console.log( children , outline )
    return (
    <button className={ `btn ${ props.outline }` } >
        {
           props.children 
        }
    </button>
  )
}

export default Button