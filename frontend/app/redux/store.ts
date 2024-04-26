import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./slice/dialogSlice";
import galleryDialogSlice from "./slice/galleryDialogSlice";
import newContactUsDialog from "./slice/newContactUsDialgo";

export const store = configureStore({
    reducer : {
        dialog : dialogReducer,
        galleryDialog : galleryDialogSlice,
        contactDialog : newContactUsDialog
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;