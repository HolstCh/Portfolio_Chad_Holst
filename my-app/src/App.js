import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react"

function App() {
  return (
      <>
        <Navbar />
        <div className="bg-black">
              <About />
              <Projects />
                  {/* <About />

              <Skills />
              <Contact /> */}
        </div>
      </>
  );
}

export default App;
