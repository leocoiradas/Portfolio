import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "./reducers/projectsReducer";
import { userReducer } from "./reducers/userReducer";
import { projectDetailsReducer } from "./reducers/projectDetailsReducer";

const store = configureStore({
    reducer: {
        projectsReducer,
        userReducer,
        projectDetailsReducer
    }
});

export default store