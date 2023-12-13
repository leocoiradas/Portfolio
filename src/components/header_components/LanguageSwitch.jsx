import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";



function LanguageSwitch(){
    const { t, i18n } = useTranslation("global")
    let currentLanguage = i18n.language
    const [language, setLanguage] = useState(currentLanguage)

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    const switchLanguage = (event) => {
        setLanguage(event.target.value)
    }

    return(
        <select onChange={switchLanguage} className="w-28 text-2xl lg:text-base bg-black text-white text-center rounded-md p-1 ">
            <option value="en">{t("header.language.en")}</option>
            <option value="es">{t("header.language.es")}</option>
        </select>
    )
}

export default LanguageSwitch