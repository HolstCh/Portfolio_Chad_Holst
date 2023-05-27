import me from "../me.jpg"
import {GoMarkGithub} from "react-icons/go";
import developer from "../developer.svg"

export default function AboutMe() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Hello, I'm Chad.<br/>
                    </h1>
                    <h1 className="px-18 title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        I love to code and create.
                    </h1>
                    <p className="text-black mb-8 leading-relaxed text-xl">
                        Once a heavy-duty technician apprentice; now, a fourth-year software engineering student who decided to pursue a career that I have a keen interest in.
                        I have a diverse technological background that allowed me to acquire various skills that I've used to overcome many challenges. I'm committed to learning
                        with a strong desire to become the optimal version of myself; I believe this desire will facilitate my goal of providing software services to benefit society.
                        As software technology evolves, I intend to evolve with it.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/Resume_Chad_Holst.pdf"
                            download="Resume_Chad_Holst.pdf"
                            className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-blue-400 rounded text-lg">
                            See Past Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-blue-600 border-0 ml-4 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                            Work With Me
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