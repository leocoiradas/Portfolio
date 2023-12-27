import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { useTranslation } from "react-i18next";


function Curriculum(){
    const { t } = useTranslation("global")
    const downloadIcon = <FaDownload />
    return(
        <article className="w-[80dvw] lg:w-[70dvw] flex flex-col lg:flex-row justify-center items-center flex-wrap gap-4 lg:gap-2 border-2 rounded-md border-purple-600 backdrop-blur-md bg-black/60 p-3">
            <div className="lg:w-1/5">
                <figure className="flex justify-center items-center text-purple-500 text-5xl">
                    {<MdOutlineContactPage />}
                </figure>
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start flex-1 gap-3">
                <h2 className={"font-sans text-purple-500 text-2xl"}>Curriculum</h2>
                <p className="font-mono text-xl text-white">{t("contact.resume")}</p>
                <a href="https://drive.google.com/file/d/1QaLopfYUq-3MCwj37I9mmFdc80kCfhsc/view?usp=drive_link" className="w-36 inline-flex justify-center items-center text-center bg-cyan-500 hover:bg-blue-700 rounded-md px-6 py-2 gap-2">{downloadIcon} Download</a>
            </div>
        </article>
    )
}

export default Curriculum