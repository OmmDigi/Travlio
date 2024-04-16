import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    dialog : string | null;
}

const initialState : IInitialState = {
    dialog : null
}

const dialogSlice = createSlice({
    initialState,
    name : "Dialog Slice",
    reducers : {
        setDialog : (state : IInitialState, action : PayloadAction<IInitialState>) => action.payload
    }
});

export default dialogSlice.reducer;
export const { setDialog } = dialogSlice.actions;