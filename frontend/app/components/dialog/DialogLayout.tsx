"use client";

import { setDialog } from "@/app/redux/slice/dialogSlice";
import { RootState } from "@/app/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RewardDialog from "./RewardDialog";
import ContactUsDialog from "./ContactUsDialog";
import MobileFIlterMenu from "../filters/MobileFIlterMenu";

const dialogs = new Map();
dialogs.set("reward-dialog", <RewardDialog />);
dialogs.set("contact-us-dialog", <ContactUsDialog />);
dialogs.set("mobile-filter-menu", <MobileFIlterMenu />);

function DialogLayout() {
  const { dialog } = useSelector((state: RootState) => state.dialog);
  const dispatch = useDispatch();
  const handleDialogDismiss = (e: any) => {
    e.stopPropagation();
    dispatch(setDialog({dialog : null}));
  };
  return (
    <div
      onClick={handleDialogDismiss}
      className={`w-full h-full bg-[#0000006b] z-20 items-center justify-center ${
        dialog ? "flex" : "hidden"
      }`}
    >
      {dialogs.get(dialog)}
    </div>
  );
}

export default DialogLayout;
