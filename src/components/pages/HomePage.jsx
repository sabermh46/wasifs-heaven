import React from 'react'
import { Link } from 'react-router-dom'
import { motherWrapper } from '../../utils/tailcss'
import WaveParticles from '../animation/WaveParticles'

export const HomePage = () => {
  return (
    <div className={`${motherWrapper}`}>
        Home page content goes here.

        <WaveParticles />

        <div className='py-40'>
          <Link className='text-blue-500 block' to={'/books'}>Books</Link>
        </div>
    </div>
  )
}
