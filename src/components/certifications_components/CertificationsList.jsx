import React from "react";
import CertificationCard from "./CertificationCard";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";


function CertificationList(){
    const certificationInfo = [
        {
            title: "Frontend Developer",
            institution: "MindHub",
            image: "/assets/certification_images/frontend-developer-certificate.webp",
            skills: [<FaHtml5 key="HTML"/>, <FaCss3Alt key="CSS" />, <IoLogoJavascript key="JavaScript" />, <FaGit key="Git" />, <FaGithub key="GitHub" />, <FaBootstrap key="Bootstrap" />],
            link: "https://www.credly.com/badges/98bc0846-4412-40e3-9994-15c9302d3387/public_url"
        },
        {
            title: "Full Stack MERN Developer",
            institution: "MindHub",
            image: "/assets/certification_images/full-stack-mern-developer-certificate.webp", 
            skills: [<FaReact key="React" />, <SiRedux key="Redux" />, <SiMongodb key="MongoDB" />, <SiExpress key="Express" />, <FaNodeJs key="Nodejs" />, <SiPostman key="Postman" />, <SiTailwindcss key="TailwindCSS" />],
            link: "https://www.credly.com/badges/dc9dc985-bd97-43a1-bb9b-ed1e5a8b0174/public_url"
        }
    ]

    return (
        <section className="max-w-[90dvw] flex flex-col lg:flex-row p-3 gap-9 lg:gap-7">
            {certificationInfo.map((element) => (<CertificationCard key={element.title} certification={element}/>))}
        </section>
    )
}
export default CertificationList