import { API_BASE_URL, BASE_URL } from "@/app/constant";
import { ITours } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosTimer } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";

interface IProps {
  info: ITours;
}

function PackagesLI({ info }: IProps) {
  const URL = `/tour/${info.URL}`;
  return (
    <li className="w-full toupPackagesShdow relative hover:scale-105 transition-all duration-500">
      <Link href={URL}>
        <Image src={info.IMG} alt="img" width={1200} height={1200} />
        <div className="text-[10px] tracking-widest px-3 py-2 bg-[#00000091] text-white absolute top-5 right-5 font-semibold rounded-full">
          {info.TOUR_TYPE}
        </div>
        <div className="w-full px-3 py-5">
          <h2 className="font-semibold text-gray-500 text-[15px]">
            {info.TITLE}
          </h2>
          {/* <ul className="flex items-center gap-4 flex-wrap mt-2">
          <li className="border text-[10px] px-3 py-1 cursor-pointer bg-gray-200 font-semibold">
            KOLKATA
          </li>
          <li className="border text-[10px] px-3 py-1 cursor-pointer bg-gray-200 font-semibold">
            KOLKATA
          </li>
          <li className="border text-[10px] px-3 py-1 cursor-pointer bg-gray-200 font-semibold">
            KOLKATA
          </li>
        </ul> */}

          <div className="flex items-center gap-1 mt-3">
            <IoIosTimer />
            <span className="text-xs text-gray-600 font-semibold">
              {info.TIME}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-3">
            <IoPricetagOutline />
            <span className="text-xs text-gray-600 font-semibold">
              {info.PRICE}
            </span>
          </div>
          {/* <button className="text-xs mt-3 font-semibold text-gray-600 hover:bg-slate-300 border w-[150px] py-[8px]">Check It</button> */}
        </div>
      </Link>
    </li>
  );
}

export default PackagesLI;