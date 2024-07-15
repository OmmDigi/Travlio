import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import NewCarousel from "../NewCarousel";
import Link from "next/link";
import { BLOGS_LIST_DATA } from "@/app/constant";
import ShimmerImage from "../ShimmerImage";


function Blogs() {
  return (
    <section className="w-full py-20">
      <div className="w-full flex items-center justify-center flex-col gap-3 sm:px-4">
        <h2 className="text-2xl">Blogs</h2>
        <span className="text-[15px] sm:w-full sm:text-center">
          Stay tuned and updated by the latest updates from our blog.
        </span>

        <div className="w-[15rem] h-[1px] mt-4 bg-slate-200"></div>
      </div>

      <ul className="w-full flex items-start justify-center gap-10 sm:flex-col sm:items-center">
        {BLOGS_LIST_DATA.slice(0, 3).map((item, index) => (
          <li key={index} className="w-[290px] overflow-hidden">
            <Link href={item.link || ""}>
              <div className="h-[11rem] w-full overflow-hidden bg-black">
                <ShimmerImage
                  className="w-full h-full hover:scale-105 cursor-pointer transition-all duration-500"
                  src={item.img}
                  alt={item.title}
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
