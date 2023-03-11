import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {ArrowRightIcon} from "@heroicons/react/20/solid";
import {UserCircleIcon} from "@heroicons/react/20/solid";
import {WrenchIcon} from "@heroicons/react/20/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {FolderIcon} from "@heroicons/react/20/solid";

function NavBar() {
    return (
        <header className="bg-slate-900">
            <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="my_portfolio/src/components/Navbar#about" className="text-4xl">
                        Chad Holst
                    </a>
                </a>
                <nav className="md:mr-auto mr-12 md:ml-4 md:py-1 md:pl-4 md:border-l-4 md:border-white flex flex-wrap items-center text-base justify-center">
                    <a href="my_portfolio/src/components/Navbar#projects" className="text-gray-400 text-2xl mr-12 hover:text-white">
                        <UserCircleIcon className=" w-8 h-8 ml-9" /> About Me
                    </a>
                    <a href="my_portfolio/src/components/Navbar#projects" className="text-gray-400 text-2xl mr-12 hover:text-white">
                        <FolderIcon className=" w-7 h-8 ml-6" /> Projects
                    </a>
                    <a href="my_portfolio/src/components/Navbar#skills" className="text-gray-400 text-2xl mr-12 hover:text-white">
                        <WrenchIcon className=" w-7 h-8 ml-3" /> Skills
                    </a>
                    <a href="my_portfolio/src/components/Navbar#contact" className="text-gray-400 text-2xl mr-12 hover:text-white">
                        <EnvelopeIcon className=" w-7 h-8 ml-6" /> Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default NavBar