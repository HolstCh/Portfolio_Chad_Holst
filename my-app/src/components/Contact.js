import React from "react";
import { SocialIcon } from 'react-social-icons';
import {contacts} from "./contacts";

export default function Contact(){
    return(
        <section id="contact" className="text-gray-400 bg-white body-font">
            <div className="container px-5 py-5 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
                        Work With Me
                    </h1>
                </div>
                <div className="flex flex-row justify-center justify-items-center gap-4 mb-10">
                    <SocialIcon url="https://www.linkedin.com/in/chad-holst-31145b247/" />
                    <SocialIcon url="https://github.com/HolstCh" />
                </div>
                <ul className="flex flex-col justify-center items-center gap-2 mb-10">
                    {contacts.map((contact) => (
                        <li className="flex " key={contact.id}>
                            <i className="text-3xl text-black mr-4">
                                {contact.icon}
                            </i>
                            {contact.id === 1 ?
                            <a href="mailto:holstch@outlook.com" className="text-lg mb-4 text-blue-600" >
								{contact.name}
							</a>:
                            <span className="text-lg mb-4 text-black" >
								{contact.name}
							</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}