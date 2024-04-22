import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import Carousel from "../Carousel";

interface IProps {
  info: {
    name: string;
    stars: string;
    message: string;
  }[];
}

function NewTestimonialItem({ info }: IProps) {
  const arrayRange = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  return (
    <Carousel datasLength={info.length}>
      {info.map((item) => (
        <li key={item.name} className="relative flex items-center flex-col">
          <div className="size-20 shadow-lg rounded-full translate-y-10 bg-white flex items-center justify-center">
            <ImQuotesLeft size={30} color="#000" />
          </div>
          <div className="min-w-[300px] bg-white p-5 min-h-80 rounded-lg flex items-center justify-center">
            <div className="w-full">
              <div className="w-full max-h-40 overflow-hidden overflow-y-auto testimonialScroll">
                <h2 className="text-xs w-full text-center mt-8 px-4">
                  {item.message}
                </h2>
              </div>

              <div className="w-full flex items-center justify-center gap-3 pt-5">
                {arrayRange(1, 5, 1).map((eachNum) => {
                  return eachNum < parseInt(item.stars) + 1 ? (
                    <FaStar color="#FFCD9C" />
                  ) : (
                    <FaRegStar color="#FFCD9C" />
                  );
                })}
              </div>

              <h2 className="text-center w-full font-bold pt-4">{item.name}</h2>
            </div>
          </div>
        </li>
      ))}
    </Carousel>
  );
}

export default NewTestimonialItem;
