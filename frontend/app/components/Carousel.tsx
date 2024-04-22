"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import IntersectionObserverComponent from "./IntersectionObserverComponent";

interface IProps {
  children: React.ReactNode;
  datasLength?: number;
  className?: string;
  // isAtEnd? : boolean;
}

const Carousel = ({ children, datasLength, className }: IProps) => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const scrollRef = useRef<HTMLUListElement | null>(null);

  let numberToScroll = 1167;

  let scrollCurrentPosition = 0;
  let isAtEnd = false;

  const scroll = (
    position: number,
    ref: MutableRefObject<HTMLUListElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      ref.current.scrollLeft = position;
    }
  };

  const onIntersect = () => {
    isAtEnd = true;
  };

  const onNotIntersect = () => {
    isAtEnd = false;
  };

  const goToNextSlide = () => {
    const positionToScroll = scrollCurrentPosition + numberToScroll;
    if (isAtEnd) return false;

    scroll(positionToScroll, scrollRef);
    scrollCurrentPosition = positionToScroll;
    return true;
  };

  const goPrevSlide = () => {
    const positionToScroll = scrollCurrentPosition - numberToScroll;
    if (positionToScroll < 0) return false;

    scroll(positionToScroll, scrollRef);
    scrollCurrentPosition = positionToScroll;
    return true;
  };

  useEffect(() => {
    // const timerId = setInterval(() => {
    //   let isGoesNext = goToNextSlide();
    //   if (!isGoesNext) {
    //     scrollCurrentPosition = 0;
    //     scroll(scrollCurrentPosition, scrollRef);
    //   }
    // }, 2500);
    // setIntervalId(timerId);
    // const timerId = setInterval(() => {
    //   console.log(scrollCurrentPosition, getTotalLayoutWidth())
    //   if(scrollCurrentPosition + 300 >= getTotalLayoutWidth()){
    //     scrollCurrentPosition = 0;
    //     scroll(scrollCurrentPosition, scrollRef)
    //   }else {
    //     goToNextSlide();
    //   }
    // }, 2500)
    // setInterval(() => {
    //   const isSuccess = goToNextSlide();
    //   if(!isSuccess) goPrevSlide();
    // }, 3000)

    // alert(window.innerWidth);

    //this is for mobile devices
    if(window.innerWidth <= 639) {
      numberToScroll = 365;
    }
  }, []);

  const onPrevBtnClicked = () => {
    if (intervalId) {
      clearInterval(intervalId);
    } else {
      goPrevSlide();
    }
  };

  const onNextBtnClicked = () => {
    if (intervalId) {
      clearInterval(intervalId);
    } else {
      goToNextSlide();
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden bg-transparent relative w-full">
        <ul
          ref={scrollRef}
          className="flex bg-transparent transition-transform duration-300 ease-in-out overflow-x-scroll gap-6 flex-nowrap"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {children}
          <IntersectionObserverComponent onIntersect={onIntersect} onNotIntersect={onNotIntersect}>
            <li></li>
          </IntersectionObserverComponent>
        </ul>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-80 text-gray-800 p-3 rounded-full focus:outline-none"
        onClick={onPrevBtnClicked}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-80 text-gray-800 p-3 rounded-full focus:outline-none"
        onClick={onNextBtnClicked}
      >
        <GrNext />
      </button>
    </div>
  );
};

export default Carousel;
