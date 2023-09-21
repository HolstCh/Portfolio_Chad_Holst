import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Project from "./components/Project"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import './styles/NavBar.css';
import React, {useEffect} from "react"
import {Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import {projects} from "./components/data"
import Skills from "./components/Skills"

function App() {
    useEffect(() => {

        // Dispatch an action to add existing projects to the Redux store
        projects.forEach((project) => {
            store.dispatch({ type: 'ADD_PROJECT', payload: project });
        });
    }, []);

  return (
      <>
        <Layout/>
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<Layout />} />
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
      </>
  );
}

export default App;

/*  <Route path="project/1" element={<Project id={1} />} /> */