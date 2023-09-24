import "../styles/NavBar.css"
import {SocialIcon} from "react-social-icons";
import React from "react";

function Footer() {
    return (
        <footer>
                <div className="flex flex-row justify-center justify-items-stretch bg-white gap-4">
                    <SocialIcon url="https://www.linkedin.com/in/chad-holst-31145b247/" />
                    <SocialIcon url="https://github.com/HolstCh" />
                    <SocialIcon url="mailto:holstch@outlook.com" />
                </div>
        </footer>
    );
}

export default Footer;