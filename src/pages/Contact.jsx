import React from "react";
import Page from "../components/Page";
import ContactInfo from "../components/ContactInfo";
import { BiMessageDetail } from "react-icons/bi";
import Curriculum from "../components/Curriculum";

function Contact(){
    const contactText = {
        title: "Contact",
        comment: "Do you want to have a direct contact with me? Here you have my social media accounts. Contact me whenever you want and I'll respond as soon as I can.",
        icon: <BiMessageDetail />
    }
    return(
        <Page info={contactText}>
            <ContactInfo />
            <Curriculum />
        </Page>
    )
}
export default Contact