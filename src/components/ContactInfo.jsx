import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
function ContactInfo(){

    const contact = [
        {
            website: "GitHub",
            icon: <BsGithub />,
            message: "",
            to: ""
        },
        {
            website: "Linkedin",
            icon: <BsLinkedin />,
            message: "",
            to: ""
        },
        {
            website: "E-Mail",
            icon: <BiLogoGmail />,
            message: "",
            to: ""
        }
    ]

    return(
        <section>
            {contact.map((element) =>  (<article></article>))}
        </section>
    )
}
export default ContactInfo