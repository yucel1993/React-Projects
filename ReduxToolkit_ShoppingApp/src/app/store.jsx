import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../feature/autSlice";
import product from "../feature/productSlice";


export const store=configureStore({
    reducer:{
        auth:authReducer,
        product:product
    }
})