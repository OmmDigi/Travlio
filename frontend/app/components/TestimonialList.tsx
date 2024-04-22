import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Carousel from "./Carousel";

const testimonials = [1, 2, 3, 4, 5, 6];

interface IProps {
  info: {
    name: string;
    stars: string;
    message: string;
  }[];
}

function TestimonialList({info} : IProps) {

  const arrayRange = (start : number, stop : number, step : number) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

  return (
    <Carousel datasLength={info.length}>
      {info.map((item, index) => (
        <li
          key={index}
          className="bg-[#263C7C] w-full h-[20rem] min-w-[350px] px-10 py-4 text-white space-y-4"
        >
          <ImQuotesLeft size={30} color="#ffffff" />
          <div className="w-full h-[60%] overflow-y-scroll testimonialScroll">
            <p className="text-justify italic text-[14px] pr-4 leading-7">
              {item.message}
            </p>
          </div>

          <div className="pb-3 space-y-1">
            <h2 className="font-semibold">{item.name}</h2>
            <div className="flex items-center gap-2">
              {
                arrayRange(1, 5, 1).map((eachNum) => {
                  return eachNum < parseInt(item.stars) + 1 ? <FaStar color="#FFCD9C"/> : <FaRegStar color="#FFCD9C" />
                }
                )
              }
            </div>
          </div>
        </li>
      ))}
    </Carousel>
  );
}

export default TestimonialList;
