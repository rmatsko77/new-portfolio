import React from 'react'
import Project from './Project'

function Projects() {

  const projects = [
    {
      id: '1',
      title: 'RedLite',
      img: 'images/redlite.png',
      description: 'Reddit browser bulit in React/Redux',
      backgroundColor: 'rgb(255, 60, 93)',
      live: 'https://redlite.netlify.app/',
      repo: 'https://github.com/rmatsko77/RedLite',
      details: {
        1: 'Uses Redux to manage global state',
        2: 'Fetches Reddit JSON data and displays it has media',
        3: 'Features live search bar, comments, and light/dark mode'
      }
    },
    {
      id: '2',
      title: 'React Arena',
      img: 'images/react-arena.png',
      description: 'Javascript based games built in React',
      backgroundColor: '#39A0ED',
      live: 'https://react-arena.netlify.app',
      repo: 'https://github.com/rmatsko77/react-arena',
      details: {
        1: 'Tic-Tac-Toe against an intelligent computer',
        2: 'Hangman game with automatic random word fetching',
        3: 'Games feature highscore tracking'
      }
    },
    {
      id: '3',
      title: `What's the plan?`,
      img: 'images/todo.png',
      description: 'Todo app with user authorization',
      backgroundColor: '#6AB547',
      live: 'https://whats-the-plan.netlify.app/homepage',
      repo: 'https://github.com/rmatsko77/Whats-the-Plan',
      details: {
        1: 'CRUD app with user authorization through Firebase',
        2: 'Uses Firestore as a database to store lists',
        3: 'Features account creation'
      }
    },
    {
      id: '3',
      title: `What's the plan?`,
      img: 'images/todo.png',
      description: 'Todo app with user authorization',
      backgroundColor: '#6AB547',
      live: 'https://whats-the-plan.netlify.app/homepage',
      repo: 'https://github.com/rmatsko77/Whats-the-Plan',
      details: {
        1: 'CRUD app with user authorization through Firebase',
        2: 'Uses Firestore as a database to store lists',
        3: 'Features account creation'
      }
    },
  ]

  return (
    <div className='projects'>
      {projects.map(project => 
        <Project
          id={project.id}
          title={project.title}
          img={project.img}
          description={project.description}
          details={project.details}
          backgroundColor={project.backgroundColor}
          live={project.live}
          repo={project.repo}
        />
      )}
    </div>
  )
}

export default Projects