import { createReducer } from "@reduxjs/toolkit";
import { get_project_details, clear_details } from "../actions/projectDetailsAction";

const initialState = {
    project_details: []
}

export const projectDetailsReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(get_project_details.fulfilled, (state, action) => {
        return {
            ...state,
            project_details: action.payload.project_details
        }
    })
    .addCase(clear_details.fulfilled, (state, action) => {
        return {
            ...initialState
        }
    }))