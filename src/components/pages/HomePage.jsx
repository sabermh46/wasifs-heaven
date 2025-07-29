import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
        Home page content goes here.

        <Link className='text-blue-500 block' to={'/books'}>Books</Link>
    </div>
  )
}
