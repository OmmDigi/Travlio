"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface IProps {
  className?: string;
}

function SearchInput({ className }: IProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div
      className={`w-[30%] border-2 py-2 pl-4 flex items-center relative sm:w-[90%] ${className}`}
    >
      <div className="flex items-center w-full">
        <input
          ref={searchInputRef}
          className="outline-none text-sm flex-grow w-full"
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={() =>
            router.push(`?search=${searchInputRef.current?.value}`)
          }
          className="h-[95%] mr-[8px] flex items-center justify-center cursor-pointer"
        >
          <IoSearchOutline />
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
