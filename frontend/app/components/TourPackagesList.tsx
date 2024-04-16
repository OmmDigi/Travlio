import Image from "next/image";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import Carousel from "./Carousel";
import { ITours } from "../types";
import Link from "next/link";

interface IProps {
  datas: ITours[];
}

function TourPackagesList({ datas }: IProps) {
  return (
    // <ul className={`grid grid-cols-3 gap-10 py-10 sm:grid-cols-1`}>
    // <div className="w-full">
    <Carousel className="py-10" datasLength={10}>
      {datas.map((item) => (
        <li
          key={item.ID}
          className="toupPackagesShdow min-w-[390px] sm:min-w-full h-auto border border-[#e1e1e1] cursor-pointer"
        >
          <Link href={`/tour/${item.ID}`}>
            <Image
              className="w-full h-52 hover:scale-105 transition-all duration-500"
              src={decodeURI(item.IMG)}
              alt="img"
              height={1200}
              width={1200}
            />
            <div className="w-full flex flex-col items-center py-8 px-5">
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
        </li>
      ))}
    </Carousel>
    // </div>
    // </ul>
  );
}

export default TourPackagesList;
