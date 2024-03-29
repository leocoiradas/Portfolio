import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function LanguageSwitch() {
    const { t, i18n } = useTranslation("global");
    let currentLanguage = i18n.language;
    const [language, setLanguage] = useState(currentLanguage);

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    const switchLanguage = (event) => {
        setLanguage(event.target.value)
    }


    return (
        <select label={t("header.language.selector")} onChange={switchLanguage} value={language} className="text-2xl lg:text-base bg-transparent text-white rounded-md border-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300 px-4 py-2 appearance-none">
            <option label={t("header.language.es")} value="es" className="bg-black text-base" />
            <option label={t("header.language.en")} value="en" className="bg-black text-base" />
        </select>
    );
}

export default LanguageSwitch;
