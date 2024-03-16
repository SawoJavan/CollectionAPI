import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";
import  cartReducer  from "./reducer.js";
export const store=configureStore({
    reducer:{
        cart:cartReducer
    }
});
// export const store=createStore(cartReducer);