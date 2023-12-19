import { createReducer } from "@reduxjs/toolkit";
import { get_project_details } from "../actions/projectDetailsAction";

const initialState = {
    proyect_details: []
}

export const projectDetailsReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(get_project_details.fulfilled, (state, action) => {
        return {
            ...state,
            project_details: action.payload.project_details
        }
    }))