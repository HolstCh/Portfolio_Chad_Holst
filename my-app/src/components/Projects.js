import { FolderIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import { projects } from "./data";
import "../styles/width.css";
import "../styles/Projects.css";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseOverlay = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-title text-gray-400 bg-white body-font relative">
            <div className="responsive-width px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <FolderIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-black">
                        Projects
                    </h1>
                    <p className="projects-text lg:w-2/3 mx-auto leading-relaxed text-base sm:text-xl text-l text-black">
                        The following are samples of projects that I have worked on in the past.
                        Clicking on a project will provide a description.
                    </p>
                </div>
                <div className="flex flex-wrap -m-16">
                    {projects.map((project) => (
                        <div
                            key={project.image}
                            className="sm:w-1/2 md:w-full lg:w-full p-4 cursor-pointer"
                            onClick={() => handleClick(project)}
                        >
                            <div className="relative">
                                <div className="overlay-text absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
                                    <h1 className="title-font lg:text-2xl text-xl font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="text-md lg:text-lg title-font font-medium text-blue-400 mb-3">
                                        {project.subtitle}
                                    </h2>
                                    <h2 className="text-sm lg:text-lg title-font font-medium text-gray-400">
                                        {project.summary}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProject && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 p-8 rounded-md max-w-3xl w-full h-full overflow-y-auto relative">
                        <button
                            className="absolute top-2 right-2 bg-red-700 hover:bg-red-600 px-2.5 text-white rounded hover:text-slate-800 cursor-pointer text-2xl"
                            onClick={handleCloseOverlay}
                        >
                            &times; {/* X character */}
                        </button>
                        <h1 className="lg:text-3xl text-xl font-semibold text-center text-white">{selectedProject.title}</h1>
                        <h2 className="text-md lg:text-lg title-font font-medium text-center text-blue-400 mb-3">{selectedProject.subtitle}</h2>
                        {selectedProject.id === 2 ? <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Buy Page</h2> : null }
                        <img
                            alt={selectedProject.alt}
                            className="object-cover object-center mb-4 rounded-md"
                            src={selectedProject.src}
                        />
                        <div>
                            {selectedProject.id === 2 ?
                                <div className="items-center flex flex-col py-2">
                                    <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Real-Time Chat Messaging</h2>
                                    <img
                                        alt="drone team"
                                        className="object-cover object-center mb-4 rounded-md"
                                        src={"../images/chat_marketplace.jpg"}
                                    />
                                </div>
                                : null}
                            <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Project Description</h2>
                            <p className="text-base text-gray-400 leading-relaxed mb-3">{selectedProject.description}</p>
                            {selectedProject.id === 1 ?
                                <div>
                                    <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Software System</h2>
                                    <img
                                        alt="drone team"
                                        className="object-cover object-center mb-4 rounded-md"
                                        src={"../images/software_architecture.jpg"}
                                    />
                                    <h2 className="text-sm lg:text-lg title-font font-medium text-gray-400 mb-3">
                                        <h2 className="title-font font-medium mb-2 text-sm lg:text-lg">The <span className="text-blue-400">Software Architecture</span> contains the following modules:</h2>
                                        <ul className="list-disc pl-5">
                                            <li><span className="text-blue-400">Model:</span>  contains logic, calculations, and direct PX4 communication </li>
                                            <li><span className="text-blue-400">View:</span>  user interface to display data and receive commands from the user </li>
                                            <li><span className="text-blue-400">Controller:</span>  processes command data and relays data between Model and View </li>
                                            <li><span className="text-blue-400">Client/Server:</span>  architecture between Controller and Model modules </li>
                                        </ul>
                                    </h2>
                                    <img
                                        alt="drone team"
                                        className="object-cover object-center mb-4 rounded-md"
                                        src={"../images/GCS.png"}
                                    />
                                    <div className="text-sm lg:text-lg text-gray-400 mb-3">
                                        <h2 className="title-font font-medium mb-2">The <span className="text-blue-400">Ground Control System (GCS)</span> has seven user interface components:</h2>
                                        <ul className="list-disc pl-5">
                                            <li>Thruster angle sliders</li>
                                            <li>Thruster RPM sliders</li>
                                            <li>Open/close gripper sliders</li>
                                            <li>Reset State button</li>
                                            <li>Command Mode dropdown (Single or Multiple)</li>
                                            <li>Send Commands button</li>
                                            <li>IMU data display (acceleration and angular speed in x, y, and z directions)</li>
                                        </ul>
                                    </div>
                                    <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Electronic System</h2>
                                    <img
                                        alt="drone team"
                                        className="object-cover object-center mb-4 rounded-md"
                                        src={"../images/pin_diagram.png"}
                                    />
                                    <table className="table-auto w-full mb-3">
                                        <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-blue-400">Component</th>
                                            <th className="px-4 py-2 text-blue-400">Rating</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Seabotix Thruster</td>
                                            <td className="px-4 py-2">110W Max, 80W Continuous</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Hitec HS422 Servo Motor</td>
                                            <td className="px-4 py-2">5W (4.8-6V, 0.8A)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Subsea Gripper</td>
                                            <td className="px-4 py-2">108W</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Pixhawk 4</td>
                                            <td className="px-4 py-2">12.5W USB Supply</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Pololu Motor Controller</td>
                                            <td className="px-4 py-2">15W</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">HolyBro PM07-V21 Board</td>
                                            <td className="px-4 py-2">45W</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">Raspberry Pi 3B</td>
                                            <td className="px-4 py-2">12.5W USB Supply</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 py-2">BlueRobotics LiPo Battery</td>
                                            <td className="px-4 py-2">14.8V, 15.6Ah</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="items-center flex flex-col">
                                        <h2 className="text-md lg:text-xl title-font font-medium text-center text-white mb-3">Testimonials</h2>
                                        <img
                                            alt="drone team"
                                            className="object-cover object-center mb-4 rounded-md"
                                            src={"../images/robotics.jpg"}
                                        />
                                    </div>
                                </div>
                                : null}
                            {selectedProject.id === 1 ? selectedProject.testimonials.map((testimonial) => (<p className="text-base text-gray-400 leading-relaxed mb-3">{testimonial}</p>)) : null}
                            <div className="flex flex-col items-center">
                                <h2 className="text-md lg:text-xl title-font font-medium text-white mb-3">Repository Link</h2>
                                <SocialIcon className="items-center" url={selectedProject.link} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}