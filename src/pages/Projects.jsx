import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_proyects } from "../store/actions/proyectsActions";
import ProjectCard from "../components/ProjectCard";
import Page from "../components/Page";
import { BsCodeSlash } from "react-icons/bs"

function Projects(){
    const dispatch = useDispatch()
    const proyects = useSelector((store) => store.proyectsReducer.proyects)
    useEffect(() => {
        dispatch(get_proyects())
    }, [])
    const projectsText = {
        title: "Projects",
        comment: "These are some of the proyects thar I've been working on. Every single one include some of all the Teccnologies that I learned so far. Feel free to check them out!!",
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