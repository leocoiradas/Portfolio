import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import SocialCard from "./SocialCard";

function ContactInfo(){

    const contact = [
        {
            website: "Linkedin",
            icon: <BsLinkedin />,
            message: "Here you have my LinkedIn profile. Feel free to contact me.",
            to: "linkedin.com/in/alan-coiradas/",
            color: "blue",
            mail: false

        },
        {
            website: "GitHub",
            icon: <BsGithub />,
            message: "If you want to check other projects or check the code of those projects showed here, check out my GitHub profile.",
            to: "https://github.com/leocoiradas",
            color: "orange",
            mail: false
        },
        {
            website: "E-Mail",
            icon: <BiLogoGmail />,
            message: "Here's my email if you want to have a more direct contact with me.",
            to: "alancoiradas00@gmail.com",
            color: "red",
            mail: true
        }
    ]

    return(
        <section className="flex flex-col justify-center items-center gap-3">
            {contact.map((element, i) =>  (<SocialCard socialInfo={element} key={i} />))}
        </section>
    )
}
export default ContactInfo