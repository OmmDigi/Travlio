"use client";

import React, { useEffect } from "react";
import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";
import { useDispatch } from "react-redux";

function OpenDialogAutomaticly() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
        dispatch(setNewContactUsDialog(true));
    }, 5000)
  }, []);

  return <div></div>;
}

export default OpenDialogAutomaticly;
