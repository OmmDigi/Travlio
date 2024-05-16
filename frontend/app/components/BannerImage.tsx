"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function BannerImage() {
  const bannerList = ["/home-page-1.jpg", "/home-page-2.jpg"];
  const mobilebannerlist = ["/mobile-banner1.webp", "/mobile-banner2.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // Delay before starting the animation

    // Clear the timer on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerList.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [bannerList]);

  return (
    // <div className={`w-full h-[350px] overflow-hidden ${loaded ? "loaded" : ""}`}>
    //   {bannerList.map((image, index) => (
    //     <Image
    //       src={image}
    //       alt="banner-2"
    //       height={1200}
    //       width={1200}
    //       className={`img w-full h-full object-cover ${
    //         index === currentIndex ? "active" : ""
    //       } sm:h-[350px] sm:object-cover`}
    //     />
    //   ))}
    // </div>
    <div
      className={`overflow-hidden h-[400px] w-full relative banner ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="sm:hidden">
        {bannerList.map((imageUrl, index) => (
          <Image
            key={index}
            height={1500}
            width={1500}
            src={imageUrl}
            alt={`Banner ${index + 1}`}
            className={`img ${
              index === currentIndex ? "active" : ""
            } sm:h-[350px] sm:object-cover`}
          />
        ))}
      </div>

      <div className="hidden sm:block">
        {mobilebannerlist.map((imageUrl, index) => (
          <Image
            key={index}
            height={1500}
            width={1500}
            src={imageUrl}
            alt={`Banner ${index + 1}`}
            className={`img ${
              index === currentIndex ? "active" : ""
            } sm:h-[350px] sm:object-cover`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerImage;
