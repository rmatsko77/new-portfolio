import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
        <h1>Robert Matsko</h1>
        <div className='spacer'></div>
        <h2><BsPersonCircle /> Web Developer</h2>
        <div className='spacer'></div>
        <h3><HiOutlineLocationMarker /> New York, NY</h3>
    </div>
  )
}

export default Header