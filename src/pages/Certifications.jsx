import React from "react";
import CertificationList from "../components/CertificationsList";
import Page from "../components/Page";
import { BiSolidCertification } from "react-icons/bi";

function Certifications(){
    const certificationsText = {
        title: "Studies and Certifications",
        comment: "These are the certifications I Have so far. I'm always looking foward to expand my knowledge!",
        icon: <BiSolidCertification />
    }
    return(
        <Page info={certificationsText}>
            <CertificationList />
        </Page>
    )
}
export default Certifications