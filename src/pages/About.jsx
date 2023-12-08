import React from "react";
import Details from "../components/about_components/Details";
import Skills from "../components/about_components/Skills";
import Page from "../components/Page";
import { FaUserCircle } from "react-icons/fa";

function About(){
    const aboutInfo = {
        title: "About me",
        comment: "Here's some info about me.",
        icon: <FaUserCircle />
    }
    return (
        <Page info={aboutInfo}>
            <Details />
            <Skills />
        </Page>
    )
}
export default About