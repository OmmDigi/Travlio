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
import Head from "next/head";
import Script from "next/script";

export function MyProvider({ child }: { child: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden overflow-y-scroll">
        <DialogLayout />
        <OpenDialogAutomaticly />
        <NewContactUsDialog />
        <FloatingBtns />
        <GalleryDialog />
        <Navbar />
        {child}
        <Footer />
      </div>
    </Provider>
  );
}
