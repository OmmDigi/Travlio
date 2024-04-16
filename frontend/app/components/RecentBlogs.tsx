import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogList from "./BlogList";
import { GLOBAL_X_PADDING } from "../constant";

function RecentBlogs() {
  const blogsdatas = [
    {
      id : "1",
      title : "8 Romantic Destinations For Your Valentine’s Vacation",
      date : "January 23, 2024",
      author : "admin",
      img : "https://travlio.in/wp-content/uploads/2024/01/8-Romantic-Destinations-For-Your-Valentine-Vacation-1024x1024-1-700x450.webp"
    },
    
    {
      id : "2",
      title : "Tour Packages From Kolkata by Thomas Cook",
      date : "January 15, 2024",
      author : "admin",
      img : "https://travlio.in/wp-content/uploads/2024/01/Tour-packages-from-Kolkata-1-1024x536-1-700x450.webp"
    },

    {
      id : "3",
      title : "Australia Tour Package By Travlio",
      date : "December 20, 2023",
      author : "admin",
      img : "https://travlio.in/wp-content/uploads/2023/12/AUS-Banner-700x450.png"
    }
  ];
  return (
    <div className={`w-full flex flex-col gap-3 items-center ${GLOBAL_X_PADDING}`}>
      <h2 className="font-bold text-xl text-center">Trending Tour Packages</h2>
      <p className="text-center text-gray-600">
        Discover the best offers on trending international tour packages from
        Kolkata with us. Your gateway to an unforgettable journey awaits, so
        don&apos;t miss out!
      </p>
      <Link href="" className="flex items-center gap-3 text-[#1764B4]">
        Read The Blog
        <FaLongArrowAltRight size={20} />
      </Link>
      <BlogList datas={blogsdatas}/>
    </div>
  );
}

export default RecentBlogs;
