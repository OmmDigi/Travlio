import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { API_BASE_URL, GLOBAL_X_PADDING } from "../constant";
import TourPackagesList from "./TourPackagesList";
import { IResponse, ITours } from "../types";

interface IProps {
  title: string;
  tourType?: string;
  subtitle: string;
  linktxt: string;
  link: string;
}

async function TourPackages(props: IProps) {
  let URL = `${API_BASE_URL}/query?tour_type=${props.tourType}`;
  if(props.tourType === "Trending Tour"){
    URL = `${API_BASE_URL}/search?q=(Summer 2024)`;
  }
  const response = await fetch(
    URL
  );
  const result = await response.json() as IResponse<{tours : ITours[], total_page : number}>;

  return (
    <div
      className={`w-full flex flex-col gap-3 mt-10 items-center ${GLOBAL_X_PADDING}`}
    >
      <h2 className="font-bold text-2xl text-center">{props.title.toUpperCase()}</h2>
      <p className="text-center text-gray-600">{props.subtitle}</p>
      <Link
        href={props.link}
        className="flex items-center gap-3 text-[#1764B4]"
      >
        {props.linktxt}
        <FaLongArrowAltRight size={20} />
      </Link>

      <TourPackagesList datas={result.data.tours}/>
    </div>
  );
}

export default TourPackages;
