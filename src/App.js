import './App.scss';
import Projects from './Projects/Projects';
import Header from './Header';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
