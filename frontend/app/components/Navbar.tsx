"use client";

import React, { useEffect, useState } from "react";
import NavUpper from "./NavUpper";
import Image from "next/image";
import { GLOBAL_X_PADDING } from "../constant";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import RewardMenuBtn from "./RewardMenuBtn";
import ContactMenuBtn from "./ContactMenuBtn";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Logo from "@/public/Travlio-new-logo.webp";

function Navbar() {
  const [isNavMenuVisiable, setIsNavMenuVisiale] = useState(false);
  const pathname = usePathname();

  const navOptions = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "TOUR PACKAGES", path: "/tours" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <>
      <NavUpper />
      <header
        className={`${GLOBAL_X_PADDING} w-full py-3 flex items-center justify-between sm:relative`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" width={170} />
        </Link>

        {/* <nav
          className={`flex items-center sm:w-44 gap-10 sm:absolute sm:flex-col ${
            isNavMenuVisiable ? "sm:flex" : "sm:hidden"
          } sm:right-0 sm:gap-3 sm:bg-white sm:top-16 z-10 sm:items-start sm:py-2 sm:px-4 sm:border sm:shadow`}
        > */}
        <nav
          onClick={() => setIsNavMenuVisiale(false)}
          className={`flex items-center sm:w-full gap-10 sm:absolute sm:flex-col sm:overflow-hidden ${
            isNavMenuVisiable ? "sm:flex h-auto" : "sm:hidden h-0"
          } sm:right-0 sm:gap-3 sm:bg-white sm:top-16 z-10 sm:items-start sm:py-2 sm:px-4 sm:border sm:shadow transition-all duration-500`}
        >
          {navOptions.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`font-[800] text-[14px] ${
                pathname === item.path ? "text-black" : "text-[#94999F]"
              }  transition-all duration-300`}
            >
              {item.name}
            </Link>
          ))}
          {/* <ContactMenuBtn /> */}
          {/* <IoSearch /> */}
        </nav>

        {isNavMenuVisiable ? (
          <IoCloseOutline
            onClick={() => setIsNavMenuVisiale(false)}
            size={32}
            className="hidden sm:block text-gray-600"
          />
        ) : (
          <IoIosMenu
            onClick={() => setIsNavMenuVisiale(true)}
            size={38}
            className="hidden sm:block text-gray-600"
          />
        )}
      </header>
    </>
  );
}

export default Navbar;
