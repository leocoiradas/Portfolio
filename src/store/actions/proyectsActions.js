import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../api";

export const get_proyects = createAsyncThunk('get_proyect', async () => {
    try {
        const response = await axios.get(`${apiURL}/api/proyects`);
        return {
            proyects: response.data.proyects
        }

    } catch (error) {
        console.log(error)
    }
})