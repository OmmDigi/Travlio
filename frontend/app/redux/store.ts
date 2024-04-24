import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./slice/dialogSlice";
import galleryDialogSlice from "./slice/galleryDialogSlice";

export const store = configureStore({
    reducer : {
        dialog : dialogReducer,
        galleryDialog : galleryDialogSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;