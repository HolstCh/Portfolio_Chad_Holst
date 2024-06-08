import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <div className="flex-navbar bg-gray-900">
                    <Link to="/" className="name-text navbar-text ml-3 text-3xl">
                        Chad Holst
                    </Link>
                    <nav className="navbar-text flex-nav-items text-center">
                            <Link to="/" className="text-gray-400 ml-5 mr-7 hover:text-blue-600">
                                About Me
                            </Link>
                            <Link to="/projects" className="text-gray-400 mr-7 hover:text-blue-600">
                                Projects
                            </Link>
                            <Link to="/contact" className="text-gray-400 mr-7 hover:text-blue-600">
                                Contact
                            </Link>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
};

export default Layout;