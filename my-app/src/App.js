import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import './styles/NavBar.css';
import React from "react"

function App() {
  return (
      <>
        <Navbar />
        <div className="bg-white">
              <Landing />
              <Projects />
              <Contact />
        </div>
      </>
  );
}

export default App;
