import React, {useRef, useState} from "react";
import { SocialIcon } from 'react-social-icons';
import {ChatBubbleLeftRightIcon} from "@heroicons/react/20/solid";
import chad from "../chad.jpg";
import "../styles/Contact.css";
import emailjs from '@emailjs/browser';

export default function Contact(){
    const form = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        setSuccessMsg("");
        if(username === ""){
            setErrMsg("Please provide a name!");
        }
        else if(email === ""){
            setErrMsg("Please provide an email!");
        }
        else if(message ===""){
            setErrMsg("Please provide a message!");
        }
        else {
            emailjs.sendForm('service_ko0p8nd', 'template_iwz41bu', form.current, 'FW6MtmMHAedQhGDmj')
                .then((result) => {
                    setSuccessMsg(
                        `Thank you ${username}, your message was sent successfully!`
                    );
                    setErrMsg("");
                    setUsername("");
                    setEmail("");
                    setMessage("");
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return(
        <section id="contact" className="projects-text text-gray-400 bg-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <ChatBubbleLeftRightIcon className="mx-auto inline-block w-10 mb-4 text-gray-400" />
                <div className="flex flex-col w-full mb-10">
                    <h1 className="sm:text-4xl text-2xl font-medium title-font text-black mb-4">
                        Collaborate With Me
                    </h1>
                    <div className="flex flex-row justify-center justify-items-center gap-4">
                        <SocialIcon url="https://www.linkedin.com/in/chad-holst-31145b247/" />
                        <SocialIcon url="https://github.com/HolstCh" />
                        <SocialIcon url="mailto:holstch@outlook.com" />
                    </div>
                </div>
                <div className="flex-contact-items gap-10">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg">
                        <img
                            className="object-cover object-center rounded-lg"
                            alt="Chad"
                            src={chad}
                        />
                    </div>
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="bg-slate-900 w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg">
                                <form ref={form} onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                                    <label>Name</label>
                                    <input className="text-black" type="text" name="username"  onChange={(e) => setUsername(e.target.value)} placeholder="Chad Holst" />
                                    <label>Email</label>
                                    <input className="text-black" type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="holstch@outlook.com" />
                                    <label>Message</label>
                                    <textarea className="text-black" name="message" onChange={(e) => setMessage(e.target.value)} placeholder="Hi Chad, can we meet next week?" />
                                    <button type="submit" className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-slate-800 rounded text-center">Send</button>
                                    {successMsg && (<p className="text-green-600">{successMsg}</p>)}
                                    {errMsg && (<p className="text-red-600">{errMsg}</p>)}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}