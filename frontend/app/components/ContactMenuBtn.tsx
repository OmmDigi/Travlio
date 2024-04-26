"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setDialog } from "../redux/slice/dialogSlice";

interface IProps {
  text? : string;
  className?: string;
}

function ContactMenuBtn({ text, className }: IProps) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setDialog({dialog : "contact-us-dialog"}))} className={`font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300 ${className}`}>{!text ? "CONTACT US" : text}</button>
  );
}

export default ContactMenuBtn;
