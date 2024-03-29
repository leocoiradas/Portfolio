import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_project_details, clear_details } from "../store/actions/projectDetailsAction";
import DetailsCard from "../components/projects_components/DetailsCard";
import LoadingData from "../components/projects_components/LoadingData";
import Page from "../components/Page";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectDetails() {
    const { t } = useTranslation("global")
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(get_project_details({
            id
        }))
        return () => {
            dispatch(clear_details())
        }
    }, [])
    const projectDetails = useSelector((store) => store.projectDetailsReducer.project_details)
    const detailsText = {
        title: t("page.projectDetails.title"),
        comment: t("page.projectDetails.desc"),
        icon: <BiDetail />
    }
    return (
        <Page info={detailsText}>
           {projectDetails && projectDetails.images && projectDetails.skills ? <DetailsCard details={ projectDetails } /> : <LoadingData />}
            <Link to="/projects" className="w-40 text-center bg-purple-500 hover:bg-purple-800 rounded-md p-3">{t("projectDetails.backButton")}</Link>
        </Page>
    )
}

export default ProjectDetails