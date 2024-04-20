"use client";

import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface IProps {
  className?: string;
}

function SearchInput({ className }: IProps) {
  return (
    <div
      className={`w-[30%] border-2 py-2 pl-4 flex items-center relative sm:w-[90%] ${className}`}
    >
      <input
        
        className="outline-none text-sm flex-grow"
        type="text"
        placeholder="Search.."
      />
      <Link
        href="?search=123"
        className="px-3 h-[95%] mr-[2px] flex items-center justify-center cursor-pointer"
      >
        <IoSearchOutline />
      </Link>
    </div>
  );
}

export default SearchInput;
