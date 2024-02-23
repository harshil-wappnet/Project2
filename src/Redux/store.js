import { configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./ContentSlice";

const store = configureStore({
    reducer: {
        content: ContentSlice, // Set the reducer here
    }
})

export default store