import Link from "next/link";
import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


function NavUpper() {
  return (
    <div className={`w-full sm:hidden border-b ${GLOBAL_X_PADDING} py-1 flex items-center justify-between`}>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500">
          <MdLocalPhone className="text-gray-600" />
          <Link href="tel:9831234910" className="text-sm font-medium">
            +91 98312 34910
          </Link>
        </div>
        <div className="flex items-center gap-2 hover:text-gray-500 transition-all duration-500">
          <HiOutlineMail className="text-gray-600" />
          <Link
            href="mailto:subrata.ash@gmail.com"
            className="text-sm font-medium"
          >
            subrata.ash@gmail.com
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <Link href="https://www.facebook.com/travlio.in">
          <FaFacebook size={14} className="text-gray-500 cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/travlio.in">
          <FaTwitter size={14} className="text-gray-500 cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/travlio.in">
          <FaYoutube size={14} className="text-gray-500 cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/travlio.in">
          <FaInstagram size={14} className="text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default NavUpper;
