import React from "react";
import CertificationList from "../components/certifications_components/CertificationsList";
import Page from "../components/Page";
import { BiSolidCertification } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Certifications(){
    const { t } = useTranslation("global")
    const certificationsText = {
        title: t("page.certifications.title"),
        comment: t("page.certifications.desc"),
        icon: <BiSolidCertification />
    }
    return(
        <Page info={certificationsText}>
            <CertificationList />
        </Page>
    )
}
export default Certifications