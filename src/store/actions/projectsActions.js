import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiURL from "../../api";

export const get_projects = createAsyncThunk('get_project', async () => {
    try {
        const response = await axios.get(`${apiURL}/projects`);
        console.log(response)
        return {
            projects: response.data.projects
        }

    } catch (error) {
        console.log(error)
    }
})