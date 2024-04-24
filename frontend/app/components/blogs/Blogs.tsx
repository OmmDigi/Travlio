import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import NewCarousel from "../NewCarousel";
import Link from "next/link";

function Blogs() {
  const blogsdatas = [
    {
      id: "1",
      title: "Hidden Gems: Exploring Europe's Off-the-Beaten-Path Destinations",
      date: "24th April’24",
      author: "Admin",
      img: "/blogs/blog1.jpeg",
      link: "/blogs/hidden-gems-europe-destinations",
    },

    {
      id: "2",
      title: "A Culinary Tour of Europe: Must-Try Dishes and Foodie Hotspots",
      date: "24th April’24",
      author: "Admin",
      img: "/blogs/blog2.webp",
      link: "/blogs/must-try-dishes-europe",
    },

    {
      id: "3",
      title: "Europe on a Budget: Tips and Tricks for Affordable Travel",
      date: "24th April’24",
      author: "Admin",
      img: "/blogs/blog3.jpeg",
      link: "/blogs/tips-tricks-budget-europe-travel",
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
            <Link href={item.link || ""}>
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
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blogs;
