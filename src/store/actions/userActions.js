import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const get_user = createAsyncThunk('get_user', async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/users')
        console.log(response)
        return {
            user: response.data.users
        }
    } catch (error) {
        
    }
})