import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import SocialCard from "./SocialCard";
import { useTranslation } from "react-i18next";

function ContactInfo(){

    const { t, i18n } = useTranslation("global")

    const contact = [
        {
            website: "Linkedin",
            icon: <BsLinkedin />,
            message: t("contact.linkedin"),
            to: "https://linkedin.com/in/alan-coiradas/",
            mail: false

        },
        {
            website: "GitHub",
            icon: <BsGithub />,
            message: t("contact.github"),
            to: "https://github.com/leocoiradas",
            mail: false
        },
        {
            website: "E-Mail",
            icon: <SiGmail />,
            message: t("contact.mail"),
            to: "alancoiradas00@gmail.com",
            mail: true
        },
        {
            website: t("curriculum.title"),
            icon: <BiSolidContact />,
            message: t("contact.curriculum"),
            to: "https://drive.google.com/file/d/1KC1NXlosY3JdrH8MqpZhWsf7Qrvi66xV/view?usp=sharing",
            mail: false
        }
    ]

    return(
        <section className="flex flex-col justify-center items-center gap-3">
            {contact.map((element, i) =>  (<SocialCard socialInfo={element} key={i} />))}
        </section>
    )
}
export default ContactInfo