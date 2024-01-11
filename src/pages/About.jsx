import React from "react";
import Details from "../components/about_components/Details";
import SkillsCollections from "../components/about_components/SkillsCollections";
import Page from "../components/Page";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About(){
    const { t } = useTranslation("global")
    const aboutInfo = {
        title: t("page.about.title"),
        comment: t("page.about.desc"),
        icon: <FaUserCircle />
    }
    return (
        <Page info={aboutInfo}>
            <Details />
            <SkillsCollections />
        </Page>
    )
}
export default About