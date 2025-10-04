import React from 'react'
import bgShade from '../../../assets/images/bg-shade.png'
import headImage from '../../../assets/head.png'
import { Button, LinkButton } from '../../common/Button'
const HeaderSection = () => {
  return (
    <div className='min-h-[10vh] flex flex-col justify-center items-center relative font-artifika'>
        <img src={bgShade} alt="Background Shade" className='absolute top-10 left-[54%] -translate-x-1/2 w-1/2 h-auto object-cover -z-10 opacity-90' />

        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white drop-shadow-lg px-4 md:px-0 leading-tight mt-10'>
            Welcome To Wasif's Heaven
        </h1>

        <div className='text-center text-xl md:text-2xl lg:text-3xl font-medium text-white drop-shadow-lg px-4 md:px-0 leading-tight mt-4 space-y-2 capitalize pt-5 pb-5'>
            <h2 >
                Read Books <br /> Daily, To
            </h2>
            <span className="flex justify-center items-center gap-4">
                <span>Grow Your Mind</span>
                <img className='h-9' src={headImage} />
            </span>
        </div>

        <Button child={'Get Started'} onClick={()=>alert("hello World")} />

    </div>
  )
}

export default HeaderSection