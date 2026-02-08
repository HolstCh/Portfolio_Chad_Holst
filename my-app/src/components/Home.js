import developer from "../developer.svg"
import Skills from "./Skills"
import Courses from "./Courses"
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import "../styles/Home.css"
import "../styles/width.css"
import React from "react";
import {Cog6ToothIcon, AcademicCapIcon} from "@heroicons/react/20/solid";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    return(
        <section id="home">
            <div className="mx-auto flex px-10 py-5 md:flex-row flex-col items-center">
                <div className="landing-text lg:flex-grow md:w-1/2 w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-blue-600">
                        Hi, my name is Chad.<br/>
                    </h1>
                    <TypeAnimation className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-800 whitespace-nowrap"
                        sequence={[
                            "I'm a DevOps & Web Developer.",
                            1000,
                            "I build & use AI-powered Tech.",
                            1000,
                            "I'm a Mechanic turned Engineer.",
                            1000,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                    <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-blue-600">
                        Welcome to my coding journey.<br/>
                    </h1>
                    <p className="text-gray-500 mb-8 sm:text-xl leading-relaxed text-l md:w-full w-7/8">
                        From troubleshooting engines to building digital systems, I bring a reliability-first mindset to DevOps and Web Development. I am focused on building and integrating AI-powered solutions, bridging the gap between stable infrastructure and intelligent automation. I’m eager to join a team that values quality, creativity, and continuous learning. If our values align, let's thrive together!
                    </p>
                    <div className="flex md:flex-row flex-col lg:flex-row justify-center items-center text-lg">
                        <a
                            href="/Resume_Chad_Holst.pdf"
                            download="Resume_Chad_Holst.pdf"
                            className="mb-4 text-white bg-blue-600 border-0 py-3 px-4 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded-md font-bold text-lg mb-2 text-center">
                            Download Resume
                        </a>
                        <Link
                            to="/projects"
                            className="mb-4 md:ml-4 sm:ml-4 text-gray-400 bg-gray-800 border-0 py-3 px-4 focus:outline-none hover:bg-gray-600 hover:text-blue-600 rounded-md font-bold text-lg mb-2 text-center">
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="mb-4 md:ml-4 text-white bg-blue-600 border-0 py-3 px-4 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded-md font-bold text-lg mb-2 text-center">
                            Let's Collaborate
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center"
                        alt="Chad"
                        src={developer}
                    />
                </div>
            </div>
            <div className="responsive-width landing-text mx-auto flex px-10 py-5 flex-col md:flex-col lg:flex-col items-center">
                <Cog6ToothIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
                    Skills
                </h1>
                <p className="projects-text lg:w-2/3 sm:text-xl mx-auto leading-relaxed text-base text-l text-center ext-gray-400">
                    My past experiences have provided opportunities to learn the following technologies
                </p>
            </div>
            <Skills />
            <div className="landing-text mx-auto flex px-10 py-5 flex-col md:flex-col lg:flex-col items-center">
                <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
                    Education
                </h1>
                <p className="projects-text lg:w-2/3 sm:text-xl mx-auto leading-relaxed text-base text-l text-center text-black">
                    Bachelor of Science with Distinction in Software Engineering<br />
                    Numerous courses have advanced my expertise in software development
                </p>
                <Courses />
            </div>
        </section>
    )
}
export default Home;

/**
 *             <div className="responsive-width landing-text mx-auto flex px-10 py-5 flex-col md:flex-col lg:flex-col items-center">
 *                 <LightBulbIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
 *                 <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
 *                     Interests
 *                 </h1>
 *                 <p className="projects-text lg:w-2/3 sm:text-xl mx-auto leading-relaxed text-base text-l text-center text-black">
 *                     Several of my recreational and professional interests that have assisted with my individual development
 *                 </p>
 *             </div>
 *             <PhotoGallery photos={photos} />
 */