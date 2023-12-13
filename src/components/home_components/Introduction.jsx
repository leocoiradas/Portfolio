import React from "react";
import { useTranslation } from "react-i18next";


function Introduction() {
    const { t } = useTranslation("global")
    return (
        <section className="flex justify-center items-center p-4 w-[75vw] gap-4 border-2 rounded-md border-purple-500 min-h-[50vh] backdrop-blur-md bg-black/60 font-mono">
            <article className="flex flex-col justify-center items-center w-full gap-4">
                <p className="lg:text-2xl text-center text-white">{t("home.message")}</p>
            </article>
        </section>
    );
}

export default Introduction