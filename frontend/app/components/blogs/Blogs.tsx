import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import NewCarousel from "../NewCarousel";

function Blogs() {
  const blogsdatas = [
    {
      id: "1",
      title: "8 Romantic Destinations For Your Valentine’s Vacation",
      date: "January 23, 2024",
      author: "admin",
      img: "https://travlio.in/wp-content/uploads/2024/01/8-Romantic-Destinations-For-Your-Valentine-Vacation-1024x1024-1-700x450.webp",
    },

    {
      id: "2",
      title: "Tour Packages From Kolkata by Thomas Cook",
      date: "January 15, 2024",
      author: "admin",
      img: "https://travlio.in/wp-content/uploads/2024/01/Tour-packages-from-Kolkata-1-1024x536-1-700x450.webp",
    },

    {
      id: "3",
      title: "Australia Tour Package By Travlio",
      date: "December 20, 2023",
      author: "admin",
      img: "https://travlio.in/wp-content/uploads/2023/12/AUS-Banner-700x450.png",
    },
  ];
  return (
    <section className="w-full py-20">
      <div className="w-full flex items-center justify-center flex-col gap-3">
        <h2 className="text-2xl">Blogs</h2>
        <span className="text-[15px]">
          Stay tuned and updated by the latest updates from our blog.
        </span>

        <div className="w-[15rem] h-[1px] mt-4 bg-slate-200"></div>
      </div>

      <ul className="w-full flex items-start justify-center gap-10">
        {blogsdatas.map((item, index) => (
          <li key={index} className="w-[290px] overflow-hidden">
            <div className="h-[11rem] w-full overflow-hidden bg-black">
              <Image
                className="w-full h-full hover:scale-105 cursor-pointer transition-all duration-500"
                src={item.img}
                alt=""
                width={1200}
                height={1200}
              />
            </div>
            <p className="font-semibold text-sky-600 text-xs tracking-wider pt-2 line-clamp-2">
              {item.author}
            </p>
            <h2 className="font-bold tracking-wide">{item.title}</h2>
            <div className="w-full flex items-center gap-1 pt-1">
              <CiCalendarDate />
              <span className="font-semibold text-[10px]">{item.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
