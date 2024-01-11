import React from "react";
import { useTranslation } from "react-i18next";

function CertificationCard({ certification }) {
    const { t } = useTranslation("global")
    return (
        <article className="flex flex-col justify-center items-center lg:w-[24rem] border-2 rounded-md bg-purple-400 hover:scale-[110%] ease-linear duration-300 p-3 gap-3">
            <div className="lg:max-h-[14rem]">
                <img src={certification.image} alt={certification.title} className="w-full h-full rounded-md"/>
            </div>
            <div className="flex flex-col justify-center items-center text-black gap-3 p-3">
                <h3 className="text-xl lg:text-2xl">{certification.title}</h3>
                <p className="text-xl">{certification.institution}</p>
            </div>
            <a href={certification.link} target="_blank" className="text-black bg-amber-400 hover:bg-amber-300 rounded-md px-5 py-2">{t("certifications.button")}</a>
            <div className="divide-y"></div>
            <div className="flex flex-wrap justify-center items-center text-3xl md:text-4xl gap-2">
                {certification.skills}
            </div>
        </article>
    )
}
export default CertificationCard