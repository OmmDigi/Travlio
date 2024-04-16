import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { GrNext } from "react-icons/gr";
import SearchInput from "../components/SearchInput";

function page() {
  const blogs = [1, 2, 3, 4, 5];
  return (
    <section className={`w-full ${GLOBAL_X_PADDING} py-5`}>
      <PageIntroBanner src="/gallery.jpg" text="BLOGS" />
      <div className="w-full flex items-center justify-center my-10">
        <SearchInput />
      </div>
      <ul className="w-full grid grid-cols-3 gap-6 sm:grid-cols-1">
        {blogs.map((item, index) => (
          <li
            key={index}
            className="w-full blogItemShdow overflow-hidden rounded-md"
          >
            <Image
              src="https://wallpapersmug.com/download/1280x720/e9f357/high-skies-pixel-art-4k.jpg"
              alt=""
              height={1200}
              width={1200}
            />
            <div className="w-full px-5 py-3">
              <span className="font-semibold text-red-500 text-xs">
                26 JANUARY 2024
              </span>
              <h2 className="font-semibold text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-xs pt-1 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptas omnis deserunt, doloribus voluptatem, at recusandae
                soluta delectus eius reprehenderit laborum perferendis.
              </p>

              <Link
                className="flex items-center gap-2 text-xs text-red-500 mt-4"
                href="/"
              >
                <span>Read More</span>
                <GrNext />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default page;
