
import './App.css';
import NavBar from "./components/Nav Bar/NavBar"
import About from "./components/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <NavBar />
     <About />
     <Projects />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;
