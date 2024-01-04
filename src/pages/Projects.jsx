import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_projects } from "../store/actions/projectsActions";
import ProjectCard from "../components/projects_components/ProjectCard";
import Page from "../components/Page";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import LoadingData from "../components/projects_components/LoadingData";

function Projects(){
    const { t } = useTranslation("global")
    const dispatch = useDispatch()
    const projects = useSelector((store) => store.projectsReducer.projects)
    useEffect(() => {
        dispatch(get_projects())
    }, [])
    const projectsText = {
        title: t("page.projects.title"),
        comment: t("page.projects.desc"),
        icon: <BsCodeSlash />
    }
    return(
        <Page info = {projectsText}>
            <article className="flex flex-wrap justify-center items-center gap-6">
            { !projects.length == 0 ? projects.map((element, i) => (<ProjectCard key={i} project={element}/>)) : <LoadingData />  }
            </article>
        </Page>
    )
}

export default Projects