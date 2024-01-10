import React from "react";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { useTranslation } from "react-i18next";
import SkillsDetailsCard from "./SkillsDetailsCard";

function SkillsCollections() {
    const { t } = useTranslation("global") 
    const frontendSkills = [
        {
            skill: "HTML",
            icon: <FaHtml5 />
        }, {
            skill: "CSS",
            icon: <FaCss3Alt />
        },
        {
            skill: "JavaScript",
            icon: <IoLogoJavascript />
        },
        {
            skill: "TailwindCSS",
            icon: <SiTailwindcss />
        },
        {
            skill: "React",
            icon: <FaReact />
        },
        {
            skill: "Redux",
            icon: <SiRedux />
        },
        {
            skill: "Git",
            icon: <FaGit />
        },
        {
            skill: "GitHub",
            icon: <FaGithub />
        }]
    const backendMernSkills = [
        {
            skill: "MongoDB",
            icon: <SiMongodb />
        },
        {
            skill: "Express",
            icon: <SiExpress />
        },
        {
            skill: "NodeJS",
            icon: <FaNodeJs />
        },
        {
            skill: "Postman",
            icon: <SiPostman />
        }
    ]
    return (
        <article className="flex flex-col justify-center items-center gap-5 py-3">
            <h3 className="text-3xl text-purple-500 text-center">{t("skills.title")}</h3>
            <div className="flex justify-center items-center flex-wrap gap-3">
               <SkillsDetailsCard arr={frontendSkills} collectionName={"skills.collections.frontend"}/>
               <SkillsDetailsCard arr={backendMernSkills} collectionName={"skills.collections.backend-mern"}/>
            </div>
        </article>
    )

}

export default SkillsCollections