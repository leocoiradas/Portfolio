import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../api";

export const get_project_details = createAsyncThunk('get_project_details', async(obj) => {
    try {
        const response = await axios.get(`${apiURL}/projects/${obj.id}`)
        return {
            project_details: response.data.projectById
        }
    } catch (error) {
        console.log(error)
    }
})

export const clear_details = createAsyncThunk('clear_details', async() => {
    try {
        return{
            project_details: {}
        }
    }
    catch (error){
        console.log(error)
    }
})