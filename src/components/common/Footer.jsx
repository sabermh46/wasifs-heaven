import React from 'react'
import { motherWrapper } from '../../utils/tailcss'
import { Link } from 'react-router-dom'

export const Footer = () => {

    const datas = [
        { name: 'Follow', link: '#' },
        { name: 'Customers', link: '#' },
        { name: 'APP_OWNER', link: '#' },
        { name: 'Quick Links', link: '#' },
        { name: 'Contact Us', link: '#' },
    ]
  return (
    <div className='bg-footer-bg'>
        <div className={`${motherWrapper}`}>
            <div className='flex justify-between'>
                {
                    datas.map((data, index) => (
                        data?.name === 'APP_OWNER' ? (
                            <AppOwner key={index} />
                        ) : (
                            <LinkGroup key={index} data={data} />
                        )
                    ))
                }
                
            </div>
            <p className='text-sm text-center'>© 2023 Wasif's Heaven. All rights reserved.</p>
        </div>
        
    </div>
  )
}

const AppOwner = () => {
  return (
    <div className='text-white'>
        <h1 className='text-2xl font-bold'>Wasif's Heaven</h1>
    </div>
  )
}

const LinkGroup = ({data}) => {
    
  return (
    <div className='text-white'>
        <h2 className='text-lg font-semibold'>{data?.name}</h2>
        <ul className='space-y-1'>
            <li>
                <Link to={data?.link} className='text-sm hover:underline'>{data?.name}</Link>
            </li>
        </ul>
    </div>
  )
}
