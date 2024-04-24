"use client";

import Image from "next/image";
import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";
import { setGalleryDialgo } from "../redux/slice/galleryDialogSlice";
import { useDispatch } from "react-redux";

function page() {
  const galleryImg = [
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.20 AM (1).jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.20 AM.jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.23 AM (1).jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.23 AM (2).jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.23 AM.jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.24 AM (1).jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.24 AM (2).jpeg",
    "/galleryimgs/WhatsApp Image 2023-06-03 at 9.59.24 AM.jpeg",
  ]

  const dispatch = useDispatch();

  return (
    <div className={`${GLOBAL_X_PADDING} sm:mt-3`}>
      <PageIntroBanner src="/gallery.jpg" text="GALLERY" />

      {/* <h2 className="w-full text-center pt-10 text-lg">Comming Soon..</h2> */}

      {/* <ul className="w-full grid grid-cols-3 gap-10 my-10 sm:grid-cols-2">
        {gallery.map((item, index) => (
          <li key={item} className="w-full cursor-pointer relative group/gallery overflow-hidden">
            <div className="bg-[#0000009a] translate-y-[100%] group-hover/gallery:translate-y-0 transition-all duration-500 h-full w-full absolute flex items-center justify-center">
              <span className="text-slate-50 font-semibold tracking-widest">IMAGE {index + 1}</span>
            </div>
            <Image
              src="https://travlio.in/wp-content/uploads/2024/02/Nubra-Valley-Trails-with-Leh-and-Pangong-700x370.jpg"
              alt="galery-1"
              width={1200}
              height={1200}
            />
          </li>
        ))}
      </ul> */}

      <ul className="w-full grid grid-cols-4 gap-5 py-6">
        {galleryImg.map((item, index) => (
          <li onClick={() => dispatch(setGalleryDialgo({visibility : true, img : item}))} key={index} className="h-[153px] bg-black overflow-hidden">
            <Image
              src={item}
              className="object-cover cursor-pointe h-full w-fullr"
              alt=""
              height={1280}
              width={1200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
