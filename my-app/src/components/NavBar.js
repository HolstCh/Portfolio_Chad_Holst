import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {UserCircleIcon} from "@heroicons/react/20/solid";
import {WrenchIcon} from "@heroicons/react/20/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {FolderIcon} from "@heroicons/react/20/solid";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import {ChevronRightIcon} from "@heroicons/react/24/solid";

function NavBar() {
    return (
        <header className="md:sticky top-0 z-10 bg-slate-900">
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                <ChevronLeftIcon className="md:text-blue-600 w-14 h-12 ml-1" />
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#AboutMe" className="ml-3 text-3xl">
                        Chad Holst
                    </a>
                </a>
                <nav className="text-xl md:mr-auto mr-12 md:ml-4 md:py-1 md:pl-4 md:border-white flex flex-wrap text-base items-center">
                    <a href="#AboutMe" className="text-gray-400 ml-5 mr-7 hover:text-blue-600">
                        About Me
                    </a>
                    <a href="#projects" className="text-gray-400 mr-7 hover:text-blue-600">
                        Projects
                    </a>
                    <a href="#Skills" className="text-gray-400 mr-7 hover:text-blue-600">
                        Skills
                    </a>
                    <span className="md:text-blue-600 md:text-5xl md:mb-4">/</span>
                    <ChevronRightIcon className="md:text-blue-600 w-14 h-12 mr-10" />
                </nav>
            </div>
        </header>
    );
}

export default NavBar