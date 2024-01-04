import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
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
            icon: <BiLogoGmail />,
            message: t("contact.mail"),
            to: "alancoiradas00@gmail.com",
            mail: true
        },
        {
            website: t("resume.title"),
            icon: <MdOutlineContactPage />,
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