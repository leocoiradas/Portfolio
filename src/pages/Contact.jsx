import React from "react";
import Page from "../components/Page";
import ContactInfo from "../components/contact_components/ContactInfo";
import { BiMessageDetail } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Contact(){
    const { t } = useTranslation("global")
    const contactText = {
        title: t("page.contact.title"),
        comment: t("page.contact.desc"),
        icon: <BiMessageDetail />
    }
    return(
        <Page info={contactText}>
            <ContactInfo />
        </Page>
    )
}
export default Contact