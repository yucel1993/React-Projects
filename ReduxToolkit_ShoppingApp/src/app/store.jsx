import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../feature/autSlice";


export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})