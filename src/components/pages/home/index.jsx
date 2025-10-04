import React from 'react'
import { Link } from 'react-router-dom'
import { motherWrapper } from '../../../utils/tailcss'
import WaveParticles from '../../animation/WaveParticles'
import HeaderSection from './HeaderSection'

export const HomePage = () => {
  return (
    <div className={`${motherWrapper}`}>
        
      <HeaderSection />

        <WaveParticles />

        <div className='py-40'>
          <Link className='text-blue-500 block' to={'/books'}>All Books</Link>
        </div>
    </div>
  )
}
