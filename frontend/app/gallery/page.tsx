import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";
import GalleryImageItem from "./GalleryImageItem";

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


  return (
    <div className={`${GLOBAL_X_PADDING} sm:mt-3`}>
      <PageIntroBanner alt="Gallery Image" src="/gallery.jpg" text="GALLERY" />
      <ul className="w-full grid grid-cols-4 gap-5 py-6 sm:grid-cols-1">
        {galleryImg.map((item, index) => (
         <GalleryImageItem key={index} image={item}/>
        ))}
      </ul>
    </div>
  );
}

export default page;
