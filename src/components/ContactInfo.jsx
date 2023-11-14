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
            color: "blue",
            to: "linkedin.com/in/alan-coiradas/"
        },
        {
            website: "GitHub",
            icon: <BsGithub />,
            message: "If you want to check other projects or check the code of those projects showed here, check out my GitHub profile.",
            color: "orange",
            to: "https://github.com/leocoiradas"
        },
        {
            website: "E-Mail",
            icon: <BiLogoGmail />,
            message: "Here's my email if you want to have a more direct contact with me.",
            color: "red",
            to: "alancoiradas00@gmail.com"
        }
    ]

    return(
        <section>
            {contact.map((element) =>  (<SocialCard socialInfo={element} />))}
        </section>
    )
}
export default ContactInfo