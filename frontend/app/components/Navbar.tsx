"use client"

import React, { useState } from "react";
import NavUpper from "./NavUpper";
import Image from "next/image";
import { GLOBAL_X_PADDING } from "../constant";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import RewardMenuBtn from "./RewardMenuBtn";
import ContactMenuBtn from "./ContactMenuBtn";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


function Navbar() {
  const [isNavMenuVisiable, setIsNavMenuVisiale] = useState(false);
  return (
    <>
      <NavUpper />
      <header
        className={`${GLOBAL_X_PADDING} w-full py-3 flex items-center justify-between sm:relative`}
      >
        <Link href="/">
          <Image src="/Travlio-new-logo.webp" alt="logo" height={170} width={170} />
        </Link>

        <nav className={`flex items-center sm:w-44 gap-10 sm:absolute sm:flex-col ${isNavMenuVisiable ? "sm:flex" : "sm:hidden"} sm:right-0 sm:gap-3 sm:bg-white sm:top-16 z-10 sm:items-start sm:py-2 sm:px-4 sm:border sm:shadow`}>
          <Link
            href="/"
            className="font-[800] text-[14px] hover:text-black transition-all duration-300"
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300"
          >
            ABOUT US
          </Link>
          <Link
            href="/tours"
            className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300"
          >
            TOUR PACKAGES
          </Link>
          {/* <Link href="/rewards" className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300">REWARDS</Link> */}
          {/* <RewardMenuBtn/> */}
          <Link
            href="/gallery"
            className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300"
          >
            GALLERY
          </Link>
          <Link
            href="/blogs"
            className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300"
          >
            BLOGS
          </Link>
          {/* <Link href="/" className="font-[800] text-[14px] hover:text-black text-[#94999F] transition-all duration-300">CONTACT US</Link> */}
          <ContactMenuBtn />
          {/* <IoSearch /> */}
        </nav>

        {
          isNavMenuVisiable ? <IoCloseOutline onClick={() => setIsNavMenuVisiale(false)} size={32} className="hidden sm:block text-gray-600" /> : <IoIosMenu onClick={() => setIsNavMenuVisiale(true)} size={38} className="hidden sm:block text-gray-600" />
        }
      </header>
    </>
  );
}

export default Navbar;
