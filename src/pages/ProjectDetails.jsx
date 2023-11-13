import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_proyect_details } from "../store/actions/proyectDetailsAction";
import DetailsCard from "../components/DetailsCard";
import Page from "../components/Page";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

function ProjectDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const projectDetails = useSelector((store) => store.proyectDetailsReducer.proyect_details)
    useEffect(() => {
        dispatch(get_proyect_details({
            id
        }))
    }, [])

    const detailsText = {
        title: "Details",
        comment: "Here you have some details of this project. Feel free to check it out",
        icon: <BiDetail />
    }
   
    return (
        <Page info={detailsText}>
           {projectDetails && projectDetails.images ? <DetailsCard details={ projectDetails } /> : null}
            <Link to="/projects" className="bg-purple-500 hover:bg-purple-800 text-white rounded-md p-3">Back to Projects</Link>
        </Page>
    )
}

export default ProjectDetails