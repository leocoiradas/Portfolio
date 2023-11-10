import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_proyect_details } from "../store/actions/proyectDetailsAction";
import DetailsCard from "../components/DetailsCard";

function ProjectDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(get_proyect_details({
            id
        }))
    }, [])
    const projectDetails = useSelector((store) => store.proyectDetailsReducer.proyect_details)
    console.log(projectDetails)
    return (
        <>
           {projectDetails && projectDetails.images ? <DetailsCard details={ projectDetails } /> : null}
        </>
    )
}

export default ProjectDetails