import React from "react";
import NavUpper from "./NavUpper";
import Image from "next/image";
import { GLOBAL_X_PADDING } from "../constant";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import RewardMenuBtn from "./RewardMenuBtn";
import ContactMenuBtn from "./ContactMenuBtn";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  return (
    <>
      <NavUpper />
      <header
        className={`${GLOBAL_X_PADDING} w-full py-3 flex items-center justify-between`}
      >
        <Link href="/">
          <Image src="/logo.webp" alt="logo" height={170} width={170} />
        </Link>

        <nav className="flex items-center gap-10 sm:hidden">
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

        <IoIosMenu className="hidden sm:block size-14" />
      </header>
    </>
  );
}

export default Navbar;
