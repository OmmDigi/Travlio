import Image from "next/image";
import React from "react";
import { BsClockHistory } from "react-icons/bs";

interface IProps {
  title: string;
  price: string;
  image: string;
  time: string;
  className?: string;
  imgheight ? :string;
}

function TourCard(props: IProps) {
  return (
    <li
      className={`toupPackagesShdow w-full h-auto border border-[#e1e1e1] cursor-pointer ${props.className}`}
    >
      <Image
        className={`w-full h-52 hover:scale-105 transition-all duration-500 ${props.imgheight}`}
        src={props.image}
        alt="img"
        height={1200}
        width={1200}
      />
      <div className="w-full flex flex-col items-center py-8 px-5">
        <h2 className="text-center font-semibold">{props.title}</h2>
        <div className="flex items-center gap-3 my-2">
          <span className="text-gray-500 text-[14.3px]">From</span>
          <span className="font-extrabold text-[#2e66aa] text-2xl tracking-widest">
            {props.price}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <BsClockHistory color="#2e66aa" />
          <span className="text-sm">{props.time}</span>
        </div>
      </div>
    </li>
  );
}

export default TourCard;
