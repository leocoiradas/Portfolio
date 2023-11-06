import { createReducer } from "@reduxjs/toolkit";
import { get_proyect_details } from "../actions/proyectDetailsAction";

const initialState = {
    proyect_details: []
}

export const proyectDetailsReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(get_proyect_details.fulfilled, (state, action) => {
        return {
            proyect_details: action.payload.proyect_details
        }
    }))