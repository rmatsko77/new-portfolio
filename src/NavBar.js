import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-bar'>
      <Link to='/'>About</Link>
      <Link to='projects'>Projects</Link>
      <Link to='contact'>Contact</Link>
    </div>
  )
}

export default NavBar