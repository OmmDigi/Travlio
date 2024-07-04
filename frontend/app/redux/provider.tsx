"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DialogLayout from "../components/dialog/DialogLayout";
import GalleryDialog from "../components/GalleryDialog";
import NewContactUsDialog from "../components/dialog/NewContactUsDialog";
import FloatingBtns from "../components/FloatingBtns";
import OpenDialogAutomaticly from "../components/OpenDialogAutomaticly";

export function MyProvider({ child }: { child: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="w-full h-screen overflow-hidden overflow-y-scroll">
        <div>
          <DialogLayout />
          <OpenDialogAutomaticly />
          <NewContactUsDialog />
          <FloatingBtns />
          <GalleryDialog />
          <Navbar />
          {child}
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
