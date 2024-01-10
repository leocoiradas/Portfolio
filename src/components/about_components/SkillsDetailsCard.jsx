import React from "react";
import { useTranslation } from "react-i18next";

function SkillsDetailsCard({ arr, collectionName }){
    const { t } = useTranslation("global")
    return(
        <details className="w-full md:w-[50dvw] flex flex-col justify-center items-center rounded-md border-2 border-purple-500 gap-5 py-3 px-2">
            <summary className="md:text-2xl text-amber-500 text-center font-mono">{t(collectionName)}</summary>
            <ul className="md:h-56 flex flex-col justify-center items-center flex-wrap p-4 gap-3">
                {arr.map((element, i) => (
                    <li key={i} className="flex justify-start items-center gap-2 text-2xl md:text-2xl font-mono">
                        <p className="text-yellow-500"><b>{element.icon}</b></p>
                        <p className="text-white">{element.skill}</p>
                    </li>))
                }
            </ul>
        </details>
    )
}

export default SkillsDetailsCard