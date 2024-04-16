import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./slice/dialogSlice";

export const store = configureStore({
    reducer : {
        dialog : dialogReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;