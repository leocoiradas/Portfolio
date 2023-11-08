import { configureStore } from "@reduxjs/toolkit";
import { proyectsReducer } from "./reducers/proyectsReducer";
import { userReducer } from "./reducers/userReducer";
import { proyectDetailsReducer } from "./reducers/proyectDetailsReducer";

const store = configureStore({
    reducer: {
        proyectsReducer,
        userReducer,
        proyectDetailsReducer
    }
});

export default store