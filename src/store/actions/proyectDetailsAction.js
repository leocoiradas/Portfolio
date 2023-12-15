import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../api";

export const get_proyect_details = createAsyncThunk('get_proyect_details', async(obj) => {
    try {
        const response = await axios.get(`${apiURL}/api/proyects/${obj.id}`)
        console.log(response)
        return {
            proyect_details: response.data.proyectById
        }
    } catch (error) {
        console.log(error)
    }
})