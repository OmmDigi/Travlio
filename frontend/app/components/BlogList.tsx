import Image from "next/image";
import React from "react";
import { LuDot } from "react-icons/lu";

interface IProps {
  datas : {
    id : string;
    title: string;
    date: string;
    author: string;
    img: string;
}[]
}

function BlogList({datas} : IProps) {
  return (
    <ul className="grid grid-cols-3 pb-12 pt-3 gap-8 sm:grid-cols-1">
      {datas.map((item) => (
        <li
          key={item.id}
          className="w-full h-[249px] overflow-hidden relative group/blogitem"
        >
          <Image
            className="h-full group-hover/blogitem:scale-110 transition-all duration-500"
            alt="blog 1"
            width={1200}
            height={1200}
            src={item.img}
          />
          <div className="w-full h-full px-5 group-hover/blogitem:pb-12 group-hover/blogitem:bg-[#5c1c1cd5] flex justify-end flex-col gap-3 py-6 bg-[#000000b7] absolute top-0 bottom-0 text-white z-10 transition-all duration-500">
            <h2 className="font-semibold">
              {item.title}
            </h2>
            <div className="flex items-center gap-3 text-xs font-medium">
              <span>{item.date}</span>
              <LuDot />
              <span>{item.author}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
