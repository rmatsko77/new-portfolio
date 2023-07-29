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
        2: 'Hangman with automatic random word fetching',
        3: 'Games feature highscore tracking'
      }
    },
    {
      id: '3',
      title: `What's the plan?`,
      img: 'images/todo.png',
      description: 'Todo app build in React and Firebase',
      backgroundColor: '#6AB547',
      live: 'https://whats-the-plan.netlify.app/',
      repo: 'https://github.com/rmatsko77/Whats-the-Plan',
      details: {
        1: 'CRUD app with user authorization through Firebase',
        2: 'Uses Firestore as a database to store lists',
        3: 'Features account creation'
      }
    },
    {
      id: '4',
      title: `Beat Builder`,
      img: 'images/beat-builder.png',
      description: 'Spotify playlist builder',
      backgroundColor: '#6F2DBD',
      live: 'https://beat-builder.surge.sh/',
      repo: 'https://github.com/rmatsko77/BeatBuilder',
      details: {
        1: 'Calls the Spotify API to search songs',
        2: `Accesses the users personal Spotify account to save playlists`,
        3: 'Has built in sample player'
      }
    },
    {
      id: '5',
      title: `x-tract`,
      img: 'images/x-tract.png',
      description: '100% SEO landing page',
      backgroundColor: '#00FFE7',
      live: 'https://x-tract.netlify.app/',
      repo: 'https://github.com/rmatsko77/x-tract',
      details: {
        1: '100% Lighthouse SEO score',
        2: `Built for a local buisiness`,
        3: 'Features working email sign-up'
      }
    },
    {
      id: '6',
      title: `Quick Keys`,
      img: 'images/keyboard.png',
      description: 'Responsive virtual keyboard',
      backgroundColor: '#E0FF4F',
      live: 'https://quickkeys.netlify.app/',
      repo: 'https://github.com/rmatsko77/Quick-Keys',
      details: {
        1: 'Virtual Keyboard',
        2: `Can be used across other apps using single entry point`,
        3: 'Fully responsive'
      }
    },
    {
      id: '7',
      title: `Calc Hub`,
      img: 'images/calc.png',
      description: 'Calculator built in React',
      backgroundColor: '#FF9341',
      live: 'https://calc-hub-react.netlify.app/',
      repo: 'https://github.com/rmatsko77/Calc-Hub',
      details: {
        1: 'Built in React',
        2: `Fully responsive`,
        3: 'Uses Javascript for all functions'
      }
    },
  ]

  return (
    <div className='projects-container'>
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
        {/*<div className='arrow' onClick={handleScroll}><MdKeyboardArrowRight /></div>*/}
      </div>
    </div>


  )
}

export default Projects