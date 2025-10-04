import React from 'react'
import { motherWrapper } from '../../utils/tailcss'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header className="bg-black/20 backdrop-blur-sm text-white sticky top-0 z-50">
        <nav className={`${motherWrapper} border-b border-slate-500/50 py-3 px-0`}>
            <Link to="/">Home</Link> |{' '}
            <Link to="/books">Books</Link> |{' '}
            <Link to="/admin">Admin</Link>
        </nav>
    </header>
  )
}
