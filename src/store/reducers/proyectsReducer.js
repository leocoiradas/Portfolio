import { createReducer } from "@reduxjs/toolkit";
import { get_proyects } from "../actions/proyectsActions";

const intialState = {
    proyects: []
}

export const proyectsReducer = createReducer(intialState, 
    (builder) => builder
    .addCase(get_proyects.fulfilled, (state, action) => {
        return {
            ...state,
            proyects: action.payload.proyects
        }
    }))