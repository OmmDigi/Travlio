import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const galleryDialogSlice = createSlice({
  initialState: {
    visibility: false,
    img: "",
  },
  name: "GalleryDiaglo",
  reducers: {
    setGalleryDialgo: (state, action : PayloadAction<{visibility : boolean, img : string}>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default galleryDialogSlice.reducer;
export const { setGalleryDialgo } = galleryDialogSlice.actions;
