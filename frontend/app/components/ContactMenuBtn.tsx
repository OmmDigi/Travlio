"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setDialog } from "../redux/slice/dialogSlice";

interface IProps {
  className?: string;
}

function ContactMenuBtn({ className }: IProps) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(setDialog({dialog : "contact-us-dialog"}))} className={`font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300 ${className}`}>CONTACT US</button>
  );
}

export default ContactMenuBtn;
