import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { RiProfileLine } from "react-icons/ri";
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
            website: t("resume.title"),
            icon: <RiProfileLine />,
            message: t("contact.resume"),
            to: "https://drive.google.com/file/d/1QaLopfYUq-3MCwj37I9mmFdc80kCfhsc/view?usp=drive_link",
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