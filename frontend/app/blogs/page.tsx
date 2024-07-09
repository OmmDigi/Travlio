import React from "react";
import { BLOGS_LIST_DATA, GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";
import Image from "next/image";
import Link from "next/link";
import { GrNext } from "react-icons/gr";

function page() {
  let currentIndex = 0;
  return (
    <section className={`w-full ${GLOBAL_X_PADDING} py-5`}>
      <PageIntroBanner src="/gallery.jpg" text="BLOGS" />
      {/* <div className="w-full flex items-center justify-center my-10">
        <SearchInput />
      </div> */}

      {/* <h2 className="w-full text-center pt-10 text-lg">Comming Soon..</h2> */}

      <ul className="w-full grid grid-cols-3 gap-6 sm:grid-cols-1 mt-8">
        {BLOGS_LIST_DATA.map((_, index) => {
          currentIndex = (BLOGS_LIST_DATA.length - 1) - index;
          return (
            <li
              key={BLOGS_LIST_DATA[currentIndex].id}
              className="w-full blogItemShdow overflow-hidden rounded-md"
            >
              <Link href={BLOGS_LIST_DATA[currentIndex].link}>
                <Image
                  className="h-60 object-cover"
                  src={BLOGS_LIST_DATA[currentIndex].img}
                  alt=""
                  height={1200}
                  width={1200}
                />
                <div className="w-full px-5 py-3">
                  <span className="font-semibold text-red-500 text-xs">
                    {BLOGS_LIST_DATA[currentIndex].date}
                  </span>
                  <h2 className="font-semibold text-gray-600 uppercase">
                    {BLOGS_LIST_DATA[currentIndex].title}
                  </h2>
                  <p className="text-xs pt-1 line-clamp-2">
                    {BLOGS_LIST_DATA[currentIndex].description}
                  </p>

                  <Link
                    className="flex items-center gap-2 text-xs text-red-500 mt-4"
                    href={BLOGS_LIST_DATA[currentIndex].link}
                  >
                    <span>Read More</span>
                    <GrNext />
                  </Link>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default page;
