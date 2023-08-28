import me from "../me.jpg"
import {GoMarkGithub} from "react-icons/go";
import developer from "../developer.svg"
import "../styles/NavBar.css";
import "../styles/Landing.css"
import "../styles/media-queries.css"

const Landing = () => {
    return(
        <section id="about">
            <div className="responsive-width mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="landing-text lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
                        Hi, I'm Chad.<br/>
                    </h1>
                    <h1 className="px-18 title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Welcome to my coding journey.
                    </h1>
                    <p className="text-gray-500 mb-8 leading-relaxed text-xl">
                        Starting in the heavy equipment industry, I have transitioned into the captivating world of software engineering. My experiences as an apprentice have instilled in me: problem-solving abilities, a collaborative skill set, and a keen eye for detail. Such qualities facilitate my commitment to crafting innovative software solutions.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/Resume_Chad_Holst.pdf"
                            download="Resume_Chad_Holst.pdf"
                            className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-lg">
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-blue-400 rounded text-lg">
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-blue-600 border-0 ml-4 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-lg">
                            Let's Collaborate
                        </a>
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
        </section>
    )
}
export default Landing;