import './App.scss';
import Header from './Header';
import Contact from './Contact';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <AnimatedRoutes />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
