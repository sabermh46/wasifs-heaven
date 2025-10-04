import React from 'react'
import { Link } from 'react-router-dom'

const buttonClassName = `cursor-pointer bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300`

export const Button = ({child, className, ...props}) => {
  return (
    <button className={`${buttonClassName} ${className}`} {...props}>
        {child}
    </button>
  )
}


export const LinkButton = ({child, to, className, ...props}) => {
  return ( 
    <Link to={to} className={`${buttonClassName} ${className}`} {...props}>
        {child}
    </Link>
  )
}