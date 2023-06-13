import {FolderIcon} from "@heroicons/react/20/solid";
import React from "react";
import { projects } from "./data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <FolderIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
                        The following are samples of projects that I have worked on in the past. Clicking on a project
                        will redirect you to the GitHub repository. The first four are group projects that I had
                        contributed to and the last four are personal projects.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 sticky">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt={project.alt}
                                    className="absolute inset-0 w-full h-full object-contain object-center"
                                    src={project.src}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100 hover:opacity-0">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}