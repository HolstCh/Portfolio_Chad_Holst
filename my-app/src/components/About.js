import me from "../me.jpg"
import {GoMarkGithub} from "react-icons/go";

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I'm Chad.
                    </h1>
                    <h1 className="px-18 title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        I love to code and create.
                    </h1>
                    <p className="text-gray-400 mb-8 leading-relaxed text-xl">
                        Once a heavy-duty technician apprentice; now, a fourth-year software engineering student who decided to pursue a career that I have a keen interest in.
                        I have a diverse technological background that allowed me to acquire various skills that I've used to overcome many challenges. I'm a committed learner
                        with a strong desire to become the optimal version of myself; I believe this desire will facilitate my goal of providing software services to benefit society.
                        As software technology evolves, I intend to evolve with it.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="my_portfolio/src/components/About#contact"
                            className="inline-flex text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="my_portfolio/src/components/About#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="Chad"
                        src={me}
                    />
                </div>
            </div>
        </section>
    )
}