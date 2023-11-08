import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_proyects = createAsyncThunk('get_proyect', async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/proyects');
        console.log(response)
        return {
            proyects: response.data.proyects
        }

    } catch (error) {
        console.log(error)
    }
})