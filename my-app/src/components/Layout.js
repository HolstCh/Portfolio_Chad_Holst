import {Outlet, Link, useLocation} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {useEffect, useState} from "react";

const Layout = () => {
    const location = useLocation();
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
        const timeoutId = setTimeout(() => setInProp(false), 300);
        return () => clearTimeout(timeoutId);
    }, [location]);

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
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="slide"
                    in={inProp}
                    onEntered={() => setInProp(false)}
                    unmountOnExit
                >
                <div className="page">
                    <Outlet />
                </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
};

export default Layout;