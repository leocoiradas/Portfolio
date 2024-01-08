import React from "react";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";

function ProjectSkills({ skillsArr }){

    let iconSkills = []

    const switchIcons = (icon) => {
        switch(icon){
            case "HTML":
                iconSkills.push(<FaHtml5 />)
                break;
            case "CSS": 
                iconSkills.push(<FaCss3Alt />)
                break;
            case "JavaScript":
                iconSkills.push(<IoLogoJavascript />)
                break;
            case "React": 
                iconSkills.push(<FaReact />)
                break;
            case "Redux":
                iconSkills.push(<SiRedux />)
                break;
            case "MongoDB": 
                iconSkills.push(<SiMongodb />)
                break;
            case "Express":
                iconSkills.push(<SiExpress />)
                break;
            case "Nodejs": 
                iconSkills.push(<FaNodeJs />)
                break;
            case "Git":
                iconSkills.push(<FaGit />)
                break;
            case "GitHub": 
                iconSkills.push(<FaGithub />)
                break;
            case "TailwindCSS":
                iconSkills.push(<SiTailwindcss />)
                break;
            case "Postman": 
                iconSkills.push(<SiPostman />)
                break;
            case "Bootstrap":
                iconSkills.push(<FaBootstrap />)
                break;
                
        }
    }
    skillsArr.map((element) => (switchIcons(element)))

    return(
        <div className="flex flex-wrap gap-3 justify-center items-center p-3 md:p-0">
            {iconSkills.map((element) => (<p className="text-3xl md:text-4xl text-purple-500">{element}</p>))}
        </div>
    )
}
export default ProjectSkills