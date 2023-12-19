import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../api";

export const get_project_details = createAsyncThunk('get_project_details', async(obj) => {
    try {
        const response = await axios.get(`${apiURL}/proyects/${obj.id}`)
        console.log(response)
        return {
            project_details: response.data.proyectById
        }
    } catch (error) {
        console.log(error)
    }
})