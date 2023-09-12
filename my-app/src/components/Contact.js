import React, {useState} from "react";
import { SocialIcon } from 'react-social-icons';
import {ChatBubbleLeftRightIcon} from "@heroicons/react/20/solid";
import {contacts} from "./contacts";
import chad from "../chad.jpg";
import "../styles/Contact.css";

export default function Contact(){
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setErrMsg("Please give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return(
        <section id="contact" className="projects-text text-gray-400 bg-white body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <ChatBubbleLeftRightIcon className="mx-auto inline-block w-10 mb-4" />
                <div className="flex flex-col w-full mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
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
                            className="object-cover object-center rounded-full pb-12"
                            alt="Chad"
                            src={chad}
                        />
                        {/*}
                        <ul className="flex flex-col justify-center items-center gap-2">
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
                        */}
                    </div>
                    <div className="w-full mb-10">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="bg-gray-900 w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                                <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                                    {errMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                            {errMsg}
                                        </p>
                                    )}
                                    {successMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                            {successMsg}
                                        </p>
                                    )}
                                    <div className="w-full flex flex-col lgl:flex-row gap-10">
                                        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                            <p className="text-sm text-gray-400 uppercase tracking-wide">
                                                Your name
                                            </p>
                                            <input
                                                onChange={(e) => setUsername(e.target.value)}
                                                value={username}
                                                className={`${
                                                    errMsg === "Username is required!" &&
                                                    "outline-designColor"
                                                } contactInput`}
                                                type="text"
                                            />
                                        </div>
                                        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                            <p className="text-sm text-gray-400 uppercase tracking-wide">
                                                Phone Number
                                            </p>
                                            <input
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                value={phoneNumber}
                                                className={`${
                                                    errMsg === "Phone number is required!" &&
                                                    "outline-designColor"
                                                } contactInput`}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                                            Email
                                        </p>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            className={`${
                                                errMsg === "Please give your Email!" &&
                                                "outline-designColor"
                                            } contactInput`}
                                            type="email"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                                            Subject
                                        </p>
                                        <input
                                            onChange={(e) => setSubject(e.target.value)}
                                            value={subject}
                                            className={`${
                                                errMsg === "Please give your Subject!" &&
                                                "outline-designColor"
                                            } contactInput`}
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                                            Message
                                        </p>
                                        <textarea
                                            onChange={(e) => setMessage(e.target.value)}
                                            value={message}
                                            className={`${
                                                errMsg === "Message is required!" && "outline-designColor"
                                            } contactTextArea`}
                                            cols="30"
                                            rows="8"
                                        ></textarea>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            onClick={handleSend}
                                            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-blue-600 duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                    {errMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                            {errMsg}
                                        </p>
                                    )}
                                    {successMsg && (
                                        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                                            {successMsg}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}