import Image from "next/image";
import React from "react";

interface IProps {
  imgsrc: string;
  text: string;
  subtext: string;
  bgColor ? : string;
}

function Service(props: IProps) {
  return (
    <div className="w-full flex justify-start flex-col">
      <div className="w-full h-44 flex items-center justify-center">
        <div style={{backgroundColor : props.bgColor}} className={`h-28 w-28 flex items-center justify-center rounded-full`}>
          <Image
            className="transition-all duration-500"
            src={props.imgsrc}
            alt={props.imgsrc}
            height={45}
            width={45}
          />
        </div>
      </div>
      <div className="w-full p-5 sm:p-3">
        <h3 className="font-semibold text-[13px] tracking-[0.2em]">
          {props.text}
        </h3>
        <p className="w-full text-justify text-xs sm:text-left mt-1">
          {props.subtext}
        </p>
      </div>
    </div>
  );
}

export default Service;
