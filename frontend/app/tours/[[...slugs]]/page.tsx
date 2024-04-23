import React from "react";
import { API_BASE_URL, BASE_URL, GLOBAL_X_PADDING } from "../../constant";
import Filter from "../../components/filters/Filter";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import SearchInput from "../../components/SearchInput";
import MobileFilterBtn from "../../components/filters/MobileFilterBtn";
import { generateFirstLetterUpper } from "@/app/utils/generateFirstLetterUpper";
import { IResponse, ITours } from "@/app/types";
import Link from "next/link";
import PackagesLI from "@/app/tour-packages/[catname]/PackagesLI";
import SearchLayout from "@/app/components/SearchLayout";

interface IProps {
  params : {slugs : string[]};
  searchParams : {search : string};
}

async function page({ params, searchParams }: IProps) {

  const catname = params.slugs?.[0] ? generateFirstLetterUpper(decodeURI(params.slugs[0])) : undefined;
  const current_page = !params.slugs?.[1] ? undefined : decodeURI(params.slugs[1]);

  console.log(searchParams.search)

  let URL = `${API_BASE_URL}/tours?catname=${catname}&page=${current_page}`;

  if(!current_page) {
    URL = `${API_BASE_URL}/tours?catname=${catname}&page=1`;
  }

  if(catname === "All") {
    URL = `${API_BASE_URL}/tours?page=${current_page}`;
  }

  if(!catname) {
    URL = `${API_BASE_URL}/tours?page=1`;
  }

  if(searchParams.search) {
    URL = `${API_BASE_URL}/search?q=${searchParams.search}`
  }

  const response = await fetch(URL);
  const tours = await response.json() as IResponse<{tours : ITours[], total_page : number}>;


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
          <SearchLayout />
          <ul className="grid w-full grid-cols-3 mx-10 gap-10 justify-center sm:grid-cols-1 sm:mx-0">
            {tours.data.tours.map((item) => <PackagesLI key={item.ID} info={item} />)}
          </ul>
          <div className="w-full flex items-center justify-center gap-10 py-10">
            <Link href={`${BASE_URL}/tours/${catname ? catname?.toLowerCase().replaceAll(" ", "-") : "all"}/${parseInt(current_page || "1") - 1}`}>
            <button className={`px-3 py-3 bg-[#c9c9c9d3] ${!current_page || current_page === "1" ? "hidden" : "block"}`}>
              <GrPrevious />
            </button>
            </Link>
            <Link href={`${BASE_URL}/tours/${catname ? catname?.toLowerCase().replaceAll(" ", "-") : "all"}/${parseInt(current_page || "1") + 1}`} className={`px-3 py-3 bg-[#c9c9c9d3] ${parseInt(current_page || "") >= tours.data.total_page ? "hidden" : "block"}`}>
              <GrNext />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
