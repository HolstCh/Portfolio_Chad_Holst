import React from 'react'

// skill list item <li>
import Skill from './Skill';

// icons for skills
import { FaPython, FaReact, FaNodeJs, FaCss3, FaJava, FaLinux } from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi"
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiTailwindcss, SiCplusplus, SiJavascript, SiApachehadoop, SiApachespark } from "react-icons/si";

export default function Skills() {
    return(
        <ul className={"pt-10 container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 lg:max-w-4xl"}>
            <Skill label={"Python"} icon={<FaPython color='blue' size={65} />}/>
            <Skill label={"C/C++"} icon={<SiCplusplus color='black' size={65} />}/>
            <Skill label={"Java"} icon={<FaJava color="blue" size={65} />}/>
            <Skill label={"JavaScript"} icon={<SiJavascript color='black' size={65} />}/>
            <Skill label={"HTML"} icon={<AiOutlineHtml5 color='blue' size={65} />}/>
            <Skill label={"CSS"} icon={<FaCss3 color='black'  size={65} />}/>
            <Skill label={"Tailwind"} icon={<SiTailwindcss color='blue' size={65} />}/>
            <Skill label={"Flask"} icon={<BiLogoFlask color='black' size={65}/>}/>
            <Skill label={"ReactJS"} icon={<FaReact color={"blue"} size={65} />}/>
            <Skill label={"NodeJS/ExpressJS"} icon={<FaNodeJs color='black' size={65} />}/>
            <Skill label={"Apache Hadoop"} icon={<SiApachehadoop color='blue' size={65} />}/>
            <Skill label={"Apache Spark"} icon={<SiApachespark color="black" size={65} />}/>
            <Skill label={"MySQL"} icon={<GrMysql color='blue' size={65} />}/>
            <Skill label={"MongoDB"} icon={<SiMongodb color='black' size={65} />}/>
            <Skill label={"Linux/Bash"} icon={<FaLinux color='blue' size={65} />}/>
            <Skill label={"Git/Github"} icon={<AiOutlineGithub color="black" size={65} />}/>
        </ul>
    )
};
