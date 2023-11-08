import { createReducer } from "@reduxjs/toolkit";
import { get_user } from "../actions/userActions";

const intialState = {
    user: []
}

export const userReducer = createReducer(intialState, 
    (builder) => builder
    .addCase(get_user.fulfilled, (state, action) => {
        return {
            ...state,
            user: action.payload.user
        }
    }))