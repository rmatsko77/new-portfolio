import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      className='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='description'>
        <h2>Welcome</h2>
        <p>My name is Robert. I am a front-end web developer hailing from Harrisburg, Pennsylvania, but now proudly call New York City my home. With a genuine passion for web development, design, and photography, I find joy in crafting digital experiences that not only look stunning but also function flawlessly.</p>
        <br></br>
        <p>My expertise lies in developing cutting-edge React applications and creating responsive web designs that adapt seamlessly across various devices. As a firm believer in the power of the web, I'm always eager to take on new challenges and explore innovative ways to merge my skills in both design and development. Whether you're a fellow enthusiast, a potential collaborator, or simply browsing through my work, I'm thrilled to have you here and can't wait to share my creative journey with you!</p>
        <img src='images/headshot.jpg' alt='headshot' className='headshot'></img>
      </div>
    </motion.div>

  )
}

export default About