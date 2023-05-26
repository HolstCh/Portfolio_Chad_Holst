import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react"

function App() {
  return (
      <>
        <Navbar />
        <div className="bg-white">
              <Landing />
              <Projects />
              <Contact />
                  {/* <Landing />

              <Skills />
              <Contact /> */}
        </div>
      </>
  );
}

export default App;
