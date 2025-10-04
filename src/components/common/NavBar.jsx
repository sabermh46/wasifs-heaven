import React from 'react'
import { motherWrapper } from '../../utils/tailcss'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { pages } from '../../utils/constants'
import { MenuIcon, Search, X } from 'lucide-react'
import { LinkButton } from './Button'

export const NavBar = () => {
  
  const [navOpen, setNavOpen] = React.useState(false)

  return (
    <header className="bg-black/20 backdrop-blur-sm text-white sticky top-0 z-50 overflow-x-clip font-artifika">

        

        <nav className={`${motherWrapper} md:border-b md:border-slate-500/50 py-1 px-0 flex justify-between items-center z-40`}>
          <button className='md:hidden absolute top-4 right-4 text-white z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 cursor-pointer' onClick={() => setNavOpen(!navOpen)}>
            {
              !navOpen ? <MenuIcon size={24} /> : <X size={24} />
            }
            
            
          </button>

            <div className="h-18 py-2 z-40">
              <img className='h-full' src={logo} alt="Logo" />
            </div>
            
            <NavLinks isOpen={navOpen} />
        </nav>
        <div className={`fixed md:hidden inset-0 h-screen bg-black/60 z-20 ${navOpen ? 'block' : 'hidden'}`} onClick={() => setNavOpen(false)}></div>
    </header>
  )
}


const NavLinks = ({isOpen})=> {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-4 w-[280px] md:w-auto absolute md:relative bg-slate-900/80 h-screen md:h-auto top-0 left-0 py-10 pt-40 md:py-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 px-8 md:px-0 md:bg-transparent text-white z-30`}>
      {
        pages?.map((page, index) => 
          {
            return page.name !== 'Home' ? (
              <Link 
                key={index}
                to={page.path}
                className='text-sm md:text-base hover:underline underline-offset-4 decoration-2 decoration-blue-500'
              >
                {page.name}
              </Link>
            ) : null
          }
        )
      }

      <Link to={'/search'} className='hover:scale-120 duration-300 hover:text-primary' title='Search'>
        <Search size={20} />
      </Link>
      <LinkButton to={'/login'} child={'Login'} />
    </div>
  )
}
