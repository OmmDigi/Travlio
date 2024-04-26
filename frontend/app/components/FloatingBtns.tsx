"use client";

import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";

function FloatingBtns() {
  const dispatch = useDispatch();
  return (
    <div className="absolute bottom-10 right-10">
      <div
        onClick={() => dispatch(setNewContactUsDialog(true))}
        className="size-12 rounded-full flex items-center justify-center bg-gray-900 cursor-pointer"
      >
        <AiOutlineMessage size={18} color="#fff" />
      </div>
    </div>
  );
}

export default FloatingBtns;
