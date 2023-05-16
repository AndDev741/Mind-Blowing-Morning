import React from 'react'
import './Button.css'

type buttonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children? : string

}

const Button = ( props : buttonProps) => {
    return (
    <button className={ `btn ${props.className}` } >
        {
           props.children 
        }
    </button>
  )
}

export default Button