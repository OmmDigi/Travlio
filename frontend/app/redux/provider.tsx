"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DialogLayout from "../components/dialog/DialogLayout";
import GalleryDialog from "../components/GalleryDialog";

export function MyProvider({ child }: { child: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden overflow-y-scroll">
        <DialogLayout />
        <GalleryDialog />
        <Navbar />
        {child}
        <Footer />
      </div>
    </Provider>
  );
}
