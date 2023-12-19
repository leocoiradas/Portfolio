import { createReducer } from "@reduxjs/toolkit";
import { get_projects } from "../actions/projectsActions";

const intialState = {
    projects: []
}

export const projectsReducer = createReducer(intialState, 
    (builder) => builder
    .addCase(get_projects.fulfilled, (state, action) => {
        return {
            ...state,
            projects: action.payload.projects
        }
    }))