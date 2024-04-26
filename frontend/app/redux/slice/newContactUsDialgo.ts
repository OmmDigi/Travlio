import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const newContactUsDialog = createSlice({
    initialState : false,
    name : "New Contact Us Dialog",
    reducers : {
        setNewContactUsDialog : (state : boolean, action : PayloadAction<boolean>) => action.payload
    }
});

export default newContactUsDialog.reducer;
export const { setNewContactUsDialog } = newContactUsDialog.actions;