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
        <select onChange={switchLanguage} value={language} className="w-28 text-2xl lg:text-base bg-transparent text-white text-center p-1 rounded-md border-2 border-transparent hover:border-purple-600 hover:text-purple-600 ease-in duration-300 appearance-none">
            <option value="es" className="bg-black text-base">
                {t("header.language.es")}
            </option>
            <option value="en" className="bg-black text-base">
                {t("header.language.en")}
            </option>
        </select>
    );
}

export default LanguageSwitch;
