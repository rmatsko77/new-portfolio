import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

function Project(props) {


    const setActive = () => {
        const card = document.getElementById(props.id)
        const arrow = document.getElementById(props.id + 'close-arrow')

        if (card.classList.value.includes('active')) {
            card.classList.remove('active')
            arrow.style.transform = null
            return
        } else {
            card.classList.add('active')
            arrow.style.transform = 'rotate(0.5turn)'
        }
    }

    const setInactive = (e) => {
        e.stopPropagation()
        if (!document.getElementById(props.id).classList.value.includes('active')) {
            setActive()
            return
        }
        document.getElementById(props.id).classList.remove('active')
        document.getElementById(props.id + 'close-arrow').style.transform = null
    }

    return (
        <div className='project' onClick={setActive} id={props.id}>
            <h2>{props.title}</h2>
            <img src={props.img} className='image'></img>
            <p className='description'>{props.description}</p>
            <div className='background' style={{ backgroundColor: props.backgroundColor }}>
                <ul className='details'>
                    <li>{props.details[1]}</li>
                    <li>{props.details[2]}</li>
                    <li>{props.details[3]}</li>
                </ul>
                <div className='links'>
                    <a href={props.live} target='_blank'>Live</a>
                    <a href={props.repo} target='_blank'>Repo</a>
                </div>
                <AiOutlineArrowDown className='close-arrow' id={props.id + 'close-arrow'} onClick={setInactive} />
            </div>

        </div>
    )
}

export default Project