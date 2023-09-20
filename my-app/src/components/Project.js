import {Link} from "react-router-dom";
import developer from "../developer.svg";
import React from 'react'
import {FolderIcon} from "@heroicons/react/20/solid";

const Project = (props) => {

    return (
        <section id="project" className="projects-text text-gray-400 bg-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <FolderIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Unmanned Underwater Vehicle
                </h1>
                <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Contributions
                    <ul className="list-decimal sm:text-2xl text-2xl font-medium title-font px-2 mb-4 text-blue-600">
                        <li >Communication between GUI, RPi, and PX4/PMB</li>
                        <li>GUI design and implementation</li>
                        <li>Sending PWM signals to actuators</li>
                        <li>Command functionalities (single/multiple command mode)</li>
                    </ul>
                </h2>
                <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                    Challenges
                </h2>
            </div>
        </section>
    )
}

export default Project;