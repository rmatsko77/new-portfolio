import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";

function Contact() {
  return (
    <div className='contact'>
      <div className='link-list'>
        <a href='https://www.linkedin.com/in/robert-matsko-905469198/' target='_blank' id='linked-in' ><BsLinkedin /></a>
        <a href='https://github.com/rmatsko77' target='_blank' id='github' ><BsGithub /></a>
        <a href='mailto:rmatsko77@gmail.com' target='_blank' id='email' ><MdEmail /></a>
        <a href='https://www.instagram.com/r.p.matsko/' target='_blank' id='instagram' >< BiLogoInstagramAlt /></a>
      </div>
    </div>
  )
}

export default Contact