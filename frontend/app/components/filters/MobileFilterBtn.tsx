"use client";

import { setDialog } from "@/app/redux/slice/dialogSlice";
import React from "react";
import { LuFilter } from "react-icons/lu";
import { useDispatch } from "react-redux";

function MobileFilterBtn() {
  const dispatch = useDispatch();
  return (
    <button className="hidden sm:block">
      <LuFilter
        onClick={() => dispatch(setDialog({ dialog: "mobile-filter-menu" }))}
        size={20}
        className="mb-1"
      />
    </button>
  );
}

export default MobileFilterBtn;
