import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_proyect_details = createAsyncThunk('get_proyect_details', async(obj) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/proyects/${obj.id}`)
        console.log(response)
        return {
            proyect_details: response.data.proyectById
        }
    } catch (error) {
        console.log(error)
    }
})