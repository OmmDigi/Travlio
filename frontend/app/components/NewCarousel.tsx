"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MOBILE_VIEW_WIDTH } from "../constant";
import Image from "next/image";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { ITours } from "../types";

SwiperCore.use([Navigation]);

interface IProps {
  children: React.ReactNode;
  dataLength: number;
  datas: ITours[];
}

function NewCarousel({ children, dataLength, datas }: IProps) {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [sliderPreviewView, setSliderPreviewView] = useState(3);

  const onPrevBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex - 1);
  };

  const onNextBtnClicked = () => {
    setCurrentIndex((preIndex) => preIndex + 1);
  };

  useEffect(() => {
    setSliderPreviewView(window?.innerWidth <= MOBILE_VIEW_WIDTH ? 1 : 3);
    if (currentIndex !== -1) {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideTo(currentIndex);
      }
    }
  }, [currentIndex]);

  return (
    <div className="w-full flex items-center relative inner">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={sliderPreviewView}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper: any) => console.log(swiper)}
        centeredSlides={true}
        effect={"coverflow"}
        // grabCursor={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   strech: 0,
        //   depth: 100,
        //   modified: 1,
        //   sliderShadows: true,
        // }}
      >
        {datas.map((item, index) => (
          <SwiperSlide key={item.ID}>
            <div
              className={`toupPackagesShdow min-w-[365px] min-h-[365px] sm:min-w-full border border-[#e1e1e1] cursor-pointer ${
                currentIndex === index ? "scale-100" : "scale-75"
              } transition-all duration-1000`}
            >
              <Link href={`/tour/${item.TITLE}`}>
                <Image
                  className="w-full h-48 hover:scale-105 transition-all duration-500"
                  src={decodeURI(item.IMG)}
                  alt="img"
                  height={1200}
                  width={1200}
                />
                <div className="w-full flex flex-col items-center py-4 px-5">
                  <h2 className="text-center font-semibold">{item.TITLE}</h2>
                  <div className="flex items-center gap-3 my-2">
                    <span className="text-gray-500 text-[14.3px]">From</span>
                    <span className="font-extrabold text-[#2e66aa] text-2xl tracking-widest">
                      {/* {₹} */}
                      {item.PRICE}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BsClockHistory color="#2e66aa" />
                    <span className="text-sm">{item.TIME}</span>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        title="Go Previous Button"
        className={`absolute top-1/2 left-4 z-20 transform -translate-y-1/2 homeInfoSection bg-white bg-opacity-80 text-gray-800 p-3 rounded-full focus:outline-none ${
          currentIndex <= 0 ? "hidden" : "block"
        }`}
        onClick={onPrevBtnClicked}
      >
        <GrPrevious />
      </button>
      <button
       title="Go Next Button"
        className={`absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-white homeInfoSection bg-opacity-80 text-gray-800 p-3 rounded-full focus:outline-none ${
          currentIndex >= dataLength - 1 ? "hidden" : "block"
        }`}
        onClick={onNextBtnClicked}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default NewCarousel;
