import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import BookingSlice from "./BookingSlice"
const store=configureStore({
    reducer:{
        booking:BookingSlice
    }
})
export default store;