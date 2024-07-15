"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { MOBILE_VIEW_WIDTH } from "../constant";

import MobileHome1 from "@/public/mobile-banner1.webp";
import MobileHome2 from "@/public/mobile-banner2.webp";

import HomeBanner1 from "@/public/home-page-1.jpg";
import HomeBanner2 from "@/public/home-page-2.jpg";

function BannerImage() {

  const bannerList = [HomeBanner1, HomeBanner2];
  const mobilebannerlist = [MobileHome1, MobileHome2];

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
      className={`overflow-hidden w-full relative banner max-h-[390px] h-[390px] sm:h-[350px] ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="sm:hidden">
        {bannerList.map((imageUrl, index) => (
          <Image
            key={index}
            loading="eager"
            src={imageUrl}
            alt={`Banner ${index + 1}`}
            className={`img ${
              index === currentIndex ? "active" : ""
            } sm:h-[350px] w-full sm:object-cover`}
          />
        ))}
      </div>

      <div className="hidden sm:block">
        {bannerList.map((imageUrl, index) => (
          <Image
            key={index}
            loading="eager"
            src={imageUrl}
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
