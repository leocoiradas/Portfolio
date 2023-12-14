import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";




function ProjectCard({project}) {
    const { t, i18n } = useTranslation("global")
    const currentLanguage = i18n.language;
    let languageShortDesc = currentLanguage == "es" ? project.shortDesc.es : project.shortDesc.en
    
   
    return (
            <div className="max-w-[75vw] md:max-w-[33rem] rounded overflow-hidden shadow-lg bg-black">
                <div className="h-[10rem] md:h-[16rem] w-full">
                    <img className="object-fill w-full h-full" src={project.images[0]} alt={project.name} />
                </div>
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start px-6 py-2 gap-2">
                    <div className="font-bold text-xl mb-2 text-white">{project.name}</div>
                    <p className="text-white text-base text-center lg:text-start">
                        {languageShortDesc}
                    </p>
                    <Link to={`/projects/${project._id}`} className="w-40 rounded-md text-center bg-purple-500 hover:bg-purple-700 p-2">{t("projects.button")}</Link>
                </div>
            </div>
    )
}

export default ProjectCard;