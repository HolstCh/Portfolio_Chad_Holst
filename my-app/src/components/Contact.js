import {FolderIcon} from "@heroicons/react/20/solid";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {GoMarkGithub} from "react-icons/go";
import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Contact(){
    return(
        <section id="contact" className="text-gray-400 bg-white body-font">
            <div className="container px-5 py-5 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <EnvelopeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
                        Follow Me
                    </h1>
                </div>
                <div className="flex flex-row justify-center justify-items-center gap-4">
                    <SocialIcon url="https://www.linkedin.com/in/chad-holst-31145b247/" />
                    <SocialIcon url="https://github.com/HolstCh" />
                </div>
            </div>
        </section>
    );
}