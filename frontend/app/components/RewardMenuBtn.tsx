"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setDialog } from "../redux/slice/dialogSlice";

interface IProps {
  className?: string;
}

function RewardMenuBtn({ className }: IProps) {
  const dispatch = useDispatch();
  return (
    <button title="Show Reward Dialog Button" onClick={() => dispatch(setDialog({dialog : "reward-dialog"}))} className={`font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300 ${className}`}>REWARDS</button>
  );
}

export default RewardMenuBtn;
