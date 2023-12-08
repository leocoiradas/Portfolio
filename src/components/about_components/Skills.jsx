import React from "react";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { DiScrum } from "react-icons/di";

function Skills(){
    const skillsCollection = [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <FaGit />, <FaGithub />, <SiTailwindcss />, <FaReact />, <SiRedux />, <SiMongodb />, <SiExpress />, <FaNodeJs />, <SiPostman />, <DiScrum />]
    return(
        <article className="flex flex-col justify-center items-center gap-5 py-3 w-4/5 ">
            <h3 className="text-3xl text-white">Skills</h3>
            <div className="flex justify-center items-center flex-wrap gap-3">
                {skillsCollection.map((element) => (<p className="p-2 text-purple-600 rounded-md text-center text-4xl"><b>{element}</b></p>))}
            </div>
            
        </article>
    )
}

export default Skills