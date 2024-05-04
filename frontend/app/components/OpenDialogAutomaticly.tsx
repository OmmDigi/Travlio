"use client";

import React, { useEffect } from "react";
import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";
import { useDispatch } from "react-redux";
import { DIALOG_TIMER_STATE } from "../constant";

function OpenDialogAutomaticly() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!DIALOG_TIMER_STATE.has("5000")) {
      const TIMER_ID = setTimeout(() => {
        clearTimeout(TIMER_ID);
        dispatch(setNewContactUsDialog(true));
        DIALOG_TIMER_STATE.set("5000", true);
      }, 5000);
    }
  }, []);

  return <div></div>;
}

export default OpenDialogAutomaticly;
