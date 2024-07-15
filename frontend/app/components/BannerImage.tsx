"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MOBILE_VIEW_WIDTH } from "../constant";

function BannerImage() {
  const bannerList = ["/home-page-1.jpg", "/home-page-2.jpg"];
  const mobilebannerlist = ["/mobile-banner1.webp", "/mobile-banner2.webp"];
  const [finalBannerList, setFinalBannerList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth >= MOBILE_VIEW_WIDTH) {
        setFinalBannerList([...bannerList]);
      } else {
        setFinalBannerList([...mobilebannerlist]);
      }
    }
  }, []);

  console.log(finalBannerList);

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
      className={`overflow-hidden bg-gray-400 w-full relative banner max-h-[390px] h-[390px] sm:h-[350px] ${
        loaded ? "loaded" : "animate-pulse"
      }`}
    >
      
      <div>
        {finalBannerList.map((imageUrl, index) => (
          <Image
            key={index}
            height={1500}
            width={1500}
            src={imageUrl}
            sizes="(max-width: 639px) 100vw, 100vw"
            alt={`Banner ${index + 1}`}
            className={`img ${
              index === currentIndex ? "active" : ""
            } sm:h-[350px] w-full sm:object-cover`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerImage;
