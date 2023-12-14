import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_proyect_details } from "../store/actions/proyectDetailsAction";
import DetailsCard from "../components/projects_components/DetailsCard";
import Page from "../components/Page";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectDetails() {
    const { t } = useTranslation("global")
    const dispatch = useDispatch()
    const { id } = useParams()
    const projectDetails = useSelector((store) => store.proyectDetailsReducer.proyect_details)
    useEffect(() => {
        dispatch(get_proyect_details({
            id
        }))
    }, [])

    const detailsText = {
        title: t("page.projectDetails.title"),
        comment: t("page.projectDetails.desc"),
        icon: <BiDetail />
    }
   
    return (
        <Page info={detailsText}>
           {projectDetails && projectDetails.images ? <DetailsCard details={ projectDetails } /> : null}
            <Link to="/projects" className="bg-purple-500 hover:bg-purple-800 rounded-md p-3">{t("projectDetails.backButton")}</Link>
        </Page>
    )
}

export default ProjectDetails