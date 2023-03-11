import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react"

function App() {
  return (
      <parent className="bg-slate-900">
          <Navbar />
          <About />
              {/* <About />
          <Projects />
          <Skills />
          <Contact /> */}
      </parent>
  );
}

export default App;
