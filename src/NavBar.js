import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const [active, setActive] = useState('about')

    const setActiveClass = (e) => {
        setActive(e.target.id)
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link to='/' id='about' className={active === 'about' ? 'active' : null} onClick={setActiveClass}>About</Link>
                <Link to='/projects' className={active === 'projects' ? 'active' : null} id='projects' onClick={setActiveClass}>Projects</Link>
            </div>
        </div>
    )
}

export default NavBar