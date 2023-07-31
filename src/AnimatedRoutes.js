import React from 'react'
import About from './About';
import Projects from './Projects/Projects';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes