import React from "react";
import profileImg from "/src/assets/profile/profile.png";
import { useTranslation } from "react-i18next";

function Details() {
  const { t } = useTranslation("global")
  const details = {
    name: "Alan Leonel Coiradas",
    title: "Full Stack Developer",
    message: "about.message"
  };

  return (
    <article className="flex flex-col lg:flex-row justify-center items-center lg:w-[75dvw] gap-3 p-4 text-2xl text-white border-2 rounded-md border-purple-400 backdrop-blur-md bg-black/60">
        <article className="flex flex-col justify-center items-center flex-1">
            <article className="w-48 h-48">
                <img src={profileImg} alt={details.name} classname="object-cover w-full h-full" />
            </article>
            <h4 className="text-purple-700">{details.name}</h4>
            <h4 className="text-purple-700">{details.title}</h4>
      </article>
      <article className="flex flex-col gap-4 lg:w-2/3">
        <p className="text-center text-base lg:text-start lg:text-2xl">{t(details.message)}</p>
      </article>
    </article>
  );
}

export default Details;
