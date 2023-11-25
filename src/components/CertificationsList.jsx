import React from "react";
import CertificationCard from "./CertificationCard";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiPostman } from "react-icons/si";


function CertificationList(){
    const certificationInfo = [
        {
            title: "Frontend Developer",
            institution: "MindHub",
            image: "src/assets/certification_images/frontend-developer-certificate.png",
            skills: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <FaGit />, <FaGithub />, <FaBootstrap />]
        },
        {
            title: "Full Stack MERN Developer",
            institution: "MindHub",
            image: "src/assets/certification_images/full-stack-mern-developer-certificate.png", 
            skills: [<FaReact />, <SiRedux />, <SiMongodb />, <SiExpress />, <FaNodeJs />, <SiPostman />]
        }
    ]

    return (
        <section className="max-w-[75dvw] flex p-3 gap-4">
            {certificationInfo.map((element) => (<CertificationCard certification={element}/>))}
        </section>
    )
}
export default CertificationList