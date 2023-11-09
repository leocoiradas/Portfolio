import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_proyect_details } from "../store/actions/proyectDetailsAction";
import DetailsCard from "./DetailsCard";

function ProjectDetails() {
    const dispatch = useDispatch()
    const {proyectId} = useParams()
    const proyectDetails = useSelector((store) => store.proyectDetailsReducer.proyect_details)
    useEffect(() => {
        dispatch(get_proyect_details({
            id: proyectId
        }))
    }, [])
    return (
        <>
            <DetailsCard details={proyectDetails}/>
        </>
    )
}

export default ProjectDetails