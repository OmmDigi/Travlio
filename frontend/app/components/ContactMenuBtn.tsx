"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";

interface IProps {
  text?: string;
  className?: string;
}

function ContactMenuBtn({ text, className }: IProps) {
  const dispatch = useDispatch();
  return (
    <button
      title="Show Contact Us Dialog Button"
      onClick={() => dispatch(setNewContactUsDialog(true))}
      className={`font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300 ${className}`}
    >
      {!text ? "CONTACT US" : text}
    </button>
  );
}

export default ContactMenuBtn;
