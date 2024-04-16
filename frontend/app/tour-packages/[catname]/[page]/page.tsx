import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { generateFirstLetterUpper } from "@/app/utils/generateFirstLetterUpper";
import { IResponse, ITours } from "@/app/types";
import { API_BASE_URL, GLOBAL_X_PADDING } from "@/app/constant";
import SearchInput from "@/app/components/SearchInput";
import Filter from "@/app/components/filters/Filter";
import MobileFilterBtn from "@/app/components/filters/MobileFilterBtn";
import PackagesLI from "../PackagesLI";
import { BASE_URL } from "@/app/constant";
import Link from "next/link";

async function page({ params }: { params: { catname : string, page: string } }) {
  const catname = generateFirstLetterUpper(decodeURI(params.catname.replaceAll("-"," ")));
  const currentpage = parseInt(decodeURI(params.page));

  let URL = `${API_BASE_URL}/tours?page=${currentpage}&catname=${catname}`;
  if(catname === "All") {
    URL = `${API_BASE_URL}/tours?page=1`;
  }
  const response = await fetch(URL);
  const tours = await response.json() as IResponse<{tours : ITours[], total_page : number}>;
  const totalPages = tours.data.total_page

  return (
    <div>
      <div className={`w-full min-h-screen pt-6 flex ${GLOBAL_X_PADDING}`}>
        {/* <div className="w-[20%] sm:hidden">
          <div className="w-full flex items-center justify-between border-b pb-2 px-2">
            <span className="font-semibold">FILTERS</span>
            <span className="text-[13px] text-gray-600 cursor-pointer">
              Reset
            </span>
          </div>

          <Filter name="Duration" filters={["1 Day Tour", "2-4 Dasy Tour"]} />
          <Filter name="Month" filters={["1 Day Tour", "2-4 Dasy Tour"]} />
          <Filter
            name="Destination"
            filters={["1 Day Tour", "2-4 Dasy Tour"]}
          />
        </div> */}
        <div className="w-full">
          <div className="w-full flex items-center justify-between mb-6">
            <div className="sm:hidden"></div>
            <SearchInput className="w-[40%] sm:w-[80%]"/>
            <MobileFilterBtn />
          </div>
          <ul className="grid w-full grid-cols-3 mx-10 gap-10 justify-center sm:grid-cols-1 sm:mx-0">
            {tours.data.tours.map((item) => <PackagesLI key={item.ID} info={item} />)}
          </ul>
          <div className="w-full flex items-center justify-center gap-10 py-10">
            <Link href={`${BASE_URL}/tour-packages/${catname.toLowerCase().replaceAll(" ", "-")}/${currentpage - 1}`} className={`px-3 py-3 bg-[#c9c9c9d3] ${currentpage === 1 ? "invisible" : "visible"}`}>
              <GrPrevious />
            </Link>
            <Link href={`${BASE_URL}/tour-packages/${catname.toLowerCase().replaceAll(" ", "-")}/${currentpage + 1}`} className={`px-3 py-3 bg-[#c9c9c9d3] ${currentpage >= totalPages ? "invisible" : "visible"}`}>
              <GrNext />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
