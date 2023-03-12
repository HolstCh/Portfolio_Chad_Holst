import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {UserCircleIcon} from "@heroicons/react/20/solid";
import {WrenchIcon} from "@heroicons/react/20/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {FolderIcon} from "@heroicons/react/20/solid";

function NavBar() {
    return (
        <header className="md:sticky top-0 z-10 bg-slate-900">
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="my_portfolio/src/components/Navbar#about" className="ml-3 text-3xl">
                        Chad Holst
                    </a>
                </a>
                <nav className="text-xl md:mr-auto mr-12 md:ml-4 md:py-1 md:pl-4 md:border-l-4 md:border-white flex flex-wrap items-center text-base justify-center">
                    <a href="my_portfolio/src/components/Navbar#projects" className="text-gray-400 mr-7 hover:text-white">
                        About Me
                    </a>
                    <a href="my_portfolio/src/components/Navbar#projects" className="text-gray-400 mr-7 hover:text-white">
                        Projects
                    </a>
                    <a href="my_portfolio/src/components/Navbar#skills" className="text-gray-400 mr-7 hover:text-white">
                        Skills
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default NavBar