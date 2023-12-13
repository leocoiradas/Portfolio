import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_proyects } from "../store/actions/proyectsActions";
import ProjectCard from "../components/projects_components/ProjectCard";
import Page from "../components/Page";
import { BsCodeSlash } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Projects(){
    const { t } = useTranslation("global")
    const dispatch = useDispatch()
    const proyects = useSelector((store) => store.proyectsReducer.proyects)
    useEffect(() => {
        dispatch(get_proyects())
    }, [])
    const projectsText = {
        title: t("page.projects.title"),
        comment: t("page.projects.desc"),
        icon: <BsCodeSlash />
    }
    return(
        <Page info = {projectsText}>
            <article className="flex flex-wrap justify-center items-center gap-6">
            { proyects ? proyects.map((element, i) => (<ProjectCard key={i} project={element}/>)) : <h2>Loading proyects...</h2>}
            </article>
        </Page>
    )
}

export default Projects