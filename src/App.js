// https://www.youtube.com/watch?v=CMg_1KxpM_4&t=600s


import './App.css';
import NavBar from "./components/Nav Bar/NavBar"
import About from "./components/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/ContactInfo"
import HomePage from './components/Home/HomePage.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>
     <About id="about"/>
     <Projects />
     <Skills  />
     <Contact id="contact"/>
    </div>
  );
}

export default App;
