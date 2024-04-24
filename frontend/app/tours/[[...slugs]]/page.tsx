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
  params: { slugs: string[] };
  searchParams: { search: string; duration: string; "tour-type": string };
}

const duration = [
  { text: "15 Days 14 Nights", isChecked: false },
  { text: "11 Days 10 Nights", isChecked: false },
  { text: "10 Days 9 Nights", isChecked: false },
  { text: "7 Days 6 Nights", isChecked: false },
];

const tourType = [
  { text: "International Tour", isChecked: false },
  { text: "Domestic Tour", isChecked: false },
];

const filters = {
  duration: [
    { text: "15 Days 14 Nights", isChecked: false },
    { text: "11 Days 10 Nights", isChecked: false },
    { text: "10 Days 9 Nights", isChecked: false },
    { text: "7 Days 6 Nights", isChecked: false },
  ],
  "tour-type": [
    { text: "International Tour", isChecked: false },
    { text: "Domestic Tour", isChecked: false },
  ],
};

async function page({ params, searchParams }: IProps) {
  const catname = params.slugs?.[0]
    ? generateFirstLetterUpper(decodeURI(params.slugs[0]))
    : undefined;
  const current_page = !params.slugs?.[1]
    ? undefined
    : decodeURI(params.slugs[1]);

  let URL = `${API_BASE_URL}/tours?catname=${catname}&page=${current_page}`;

  if (!current_page) {
    URL = `${API_BASE_URL}/tours?catname=${catname}&page=1`;
  }

  if (catname === "All") {
    URL = `${API_BASE_URL}/tours?page=${current_page}`;
  }

  if (!catname) {
    URL = `${API_BASE_URL}/tours?page=1`;
  }

  if (searchParams.search) {
    URL = `${API_BASE_URL}/search?q=${searchParams.search}`;
  }



  let queryText : string | null = null;

  const setDurationCheckBoxDone = (textToCheck: string) => {
    if(queryText === null) {
      queryText = `?duration=${textToCheck}`
    } else {
      queryText += `&duration=${textToCheck}`
    }

    let indexOfDuration = -1;
    for (var i = 0; i < duration.length; i++) {
      if (duration[i].text === textToCheck) {
        indexOfDuration = i;
      }
    }
    duration[indexOfDuration].isChecked = true;
  };

  const resetDurationCheckBox = () => {
    duration.forEach((item, index) => {
      duration[index].isChecked = false;
    });
  };

  const checkDurationChecbox = () => {
    if (searchParams.duration !== undefined) {
      if (!Array.isArray(searchParams.duration)) {
        setDurationCheckBoxDone(searchParams.duration);
      } else {
        searchParams.duration.map((item) => {
          setDurationCheckBoxDone(item);
        });
      }
    } else {
      resetDurationCheckBox();
    }
  }

  checkDurationChecbox();

  const setTourTypeCheckBoxDone = (textToCheck: string) => {
    if(queryText === null) {
      queryText = `?tour-type=${textToCheck}`
    } else {
      queryText += `&tour-type=${textToCheck}`
    }

    let indexOfDuration = -1;
    for (var i = 0; i < tourType.length; i++) {
      if (tourType[i].text === textToCheck) {
        indexOfDuration = i;
      }
    }
    tourType[indexOfDuration].isChecked = true;
  };

  const resetTourTypeCheckBox = () => {
    tourType.forEach((item, index) => {
      tourType[index].isChecked = false;
    });
  };

  const checkTourTypeChecbox = () => {
    if (searchParams["tour-type"] !== undefined) {
      if (!Array.isArray(searchParams["tour-type"])) {
        setTourTypeCheckBoxDone(searchParams["tour-type"]);
      } else {
        searchParams["tour-type"].map((item) => {
          setTourTypeCheckBoxDone(item);
        });
      }
    } else {
      resetTourTypeCheckBox();
    }
  }

  checkTourTypeChecbox();

  if (searchParams.duration || searchParams["tour-type"]) {
    URL = `${API_BASE_URL}/filter${queryText}`;
  }

  const response = await fetch(URL);
  const tours = (await response.json()) as IResponse<{
    tours: ITours[];
    total_page: number;
  }>;

  return (
    <div>
      <div className={`w-full min-h-screen pt-6 flex ${GLOBAL_X_PADDING}`}>
        <div className="w-[20%] sm:hidden">
          <div className="w-full flex items-center justify-between border-b pb-2 px-2">
            <span className="font-semibold">FILTERS</span>
            {/* <span className="text-[13px] text-gray-600 cursor-pointer">
              Reset
            </span> */}
          </div>
          <Filter name="Duration" filters={duration} />
          <Filter name="Tour Type" filters={tourType} />
          {/* <Filter
            name="Price Range"
            type="pricebar"
            minprice={0}
            maxprice={14000}
          /> */}
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-between py-4 pl-10 sm:flex-col sm:pl-0">
            <h1 className="font-semibold tracking-widest text-2xl text-gray-700 sm:text-center sm:pb-3">
              TOUR PACKAGES FROM KOLKATA
            </h1>
            <SearchLayout />
          </div>
          <ul className="grid w-full grid-cols-3 mx-10 gap-10 justify-center sm:grid-cols-1 sm:mx-0">
            {tours.data.tours.map((item) => (
              <PackagesLI key={item.ID} info={item} />
            ))}
          </ul>
          <div className="w-full flex items-center justify-center gap-10 py-10">
            <Link
              href={`${BASE_URL}/tours/${
                catname ? catname?.toLowerCase().replaceAll(" ", "-") : "all"
              }/${parseInt(current_page || "1") - 1}`}
            >
              <button
                className={`px-3 py-3 bg-[#c9c9c9d3] ${
                  !current_page || current_page === "1" ? "hidden" : "block"
                }`}
              >
                <GrPrevious />
              </button>
            </Link>
            <Link
              href={`${BASE_URL}/tours/${
                catname ? catname?.toLowerCase().replaceAll(" ", "-") : "all"
              }/${parseInt(current_page || "1") + 1}`}
              className={`px-3 py-3 bg-[#c9c9c9d3] ${
                parseInt(current_page || "") >= tours.data.total_page
                  ? "hidden"
                  : "block"
              }`}
            >
              <GrNext />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
