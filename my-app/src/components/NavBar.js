import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import "../styles/NavBar.css"

function NavBar() {
    return (
        <header>
            <div className="flex-navbar">
                <a href="#about" className="name text-blue-600 ml-3 text-3xl">
                    Chad Holst
                </a>
                <nav className="name flex-nav-items">
                    <a href="#about" className="text-gray-400 ml-5 mr-7 hover:text-blue-600">
                        About Me
                    </a>
                    <a href="#projects" className="text-gray-400 mr-7 hover:text-blue-600">
                        Projects
                    </a>
                    <a href="#contact" className="text-gray-400 mr-7 hover:text-blue-600">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default NavBar