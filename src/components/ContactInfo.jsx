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
            message: "",
            color: "blue",
            to: ""
        },
        {
            website: "GitHub",
            icon: <BsGithub />,
            message: "",
            color: "orange",
            to: ""
        },
        {
            website: "E-Mail",
            icon: <BiLogoGmail />,
            message: "",
            color: "red",
            to: ""
        }
    ]

    return(
        <section>
            {contact.map((element) =>  (<SocialCard socialInfo={element} />))}
        </section>
    )
}
export default ContactInfo