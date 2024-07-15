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
    <div
      className={`overflow-hidden bg-black w-full relative banner max-h-[390px] min-h-[340px] ${
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
            } sm:h-[350px] w-full sm:object-cover`}
          />
        ))}
      </div>

      <div className="hidden sm:block">
        {mobilebannerlist.map((imageUrl, index) => (
          <Image
            loading="eager"
            key={index}
            height={1500}
            width={1500}
            src={imageUrl}
            alt={`Banner ${index + 1}`}
            sizes="(min-width: 808px) 50vw, 100vw"
            className={`img ${
              index === currentIndex ? "active" : ""
            } sm:h-auto w-full sm:object-contain`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerImage;
