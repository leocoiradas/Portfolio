import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProjectSkills from "./ProjectSkills";


function DetailsCard({ details }) {

    const gitHubIcon = <FaGithub />

    const { t, i18n } = useTranslation("global")
    const currentLanguage = i18n.language;
    
    let languageDesc = currentLanguage == "es" ? details.desc.es : details.desc.en

    return (
        <section className="lg:max-w-[65dvw]">
            <div className="block rounded-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700">
                <div className="flex  snap-x snap-mandatory overflow-x-scroll scroll-smooth gap-3 md:gap-6">
                    {details.images.map((image, i) => (
                            <img
                                key={i}
                                className="snap-center h-[20rem] md:h-[34rem] w-full object-fill flex-shrink-0"
                                src={image}
                                alt={details.name} />
                    ))}
                </div>
                <div className="p-6 flex flex-col justify-center items-center text-center">
                    <h5
                        className="w-full mb-2 text-xl font-medium leading-tight text-amber-500">
                        {details.name}
                    </h5>
                    <p className="mb-4 text-sm lg:text-base text-neutral-600 dark:text-neutral-200">
                        {languageDesc}
                    </p>
                    <div className="flex flex-col md:flex-row gap-1 p-3">
                        <h6 className="text-xl text-amber-500">{t("projectDetails.projectSkills")}</h6>
                        <ProjectSkills skillsArr={details.skills} />
                    </div>
                    <p className="w-full text-base text-neutral-600 dark:text-neutral-200 mb-4">
                        <small className="text-neutral-500 dark:text-neutral-400">{details.period}</small>
                    </p>
                    <div className="w-full flex justify-center items-center">
                        <a href={details.github} target="_blank" className="w-auto inline-flex justify-center items-baseline text-center bg-black text-white hover:bg-slate-800 px-6 py-3 gap-2 rounded-md">{gitHubIcon} {t("projectDetails.githubRepository")}</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default DetailsCard