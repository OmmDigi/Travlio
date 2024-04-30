"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { searchString } from "@/app/searchParama";
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';

interface IProps {
  name: string;
  filters?: { text: string; isChecked: boolean; }[];
  type?: "default" | "pricebar";
  maxprice?: number;
  minprice?: number;
}

function Filter(props: IProps) {
  const [currentPrice, setCurrentPrice] = useState(0);
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<any>(null);

  const router = useRouter();

  const filterKeys: any = {
    Duration: "duration",
    "Tour Type": "tour-type",
  };

  const handelRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPrice(Number(event.target.value));
  };

  const handleChecboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    itemName: string
  ) => {
    const filterName = filterKeys[props.name];

    if (event.target.checked) {
      const urlSearchParams = new URLSearchParams(searchParams);
      urlSearchParams.append(filterName, itemName);
      router.push(`?${urlSearchParams}`);
    } else {
      const urlSearchParams = new URLSearchParams(searchParams);

      const paramsList = urlSearchParams.getAll(filterName);

      const undeletedParams = paramsList.filter((value) => value !== itemName);

      urlSearchParams.delete(filterName);

      undeletedParams.forEach((element) => {
        urlSearchParams.append(filterName, element);
      });
      router.push(`?${urlSearchParams}`);
    }

    // if (event.target.checked) {
    //   const oldFilters = JSON.parse(JSON.stringify(filters === null ? {} : filters));
    //   oldFilters[filterName]?.push(itemName);

    //   // const searchString = new URLSearchParams();
    //   searchString.append(filterName, oldFilters[filterName]);
    //   router.push(`?${searchString}`);
    //   console.log(searchString.toString())
    //   setFilters(oldFilters);
    // }

    // console.log(searchParams.getAll("duration"));

    // searchString.append("HElklo", "world");
    // searchString.append("hi", "how");
    // searchString.append(filterName, itemName);
    // console.log(searchString)
    // router.push(`?${searchString.toString()}`)
  };

  return (
    <div className="py-2 px-2 border-b">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-semibold pb-2 text-sm">{props.name}</h2>
        <span
          className={`${
            !props.type || props.type === "default" ? "hidden" : "block"
          }`}
        >
          ₹{currentPrice}
        </span>
      </div>
      <ul
        className={`w-full text-xs text-gray-500 space-y-4 ${
          !props.type || props.type === "default" ? "block" : "hidden"
        }`}
      >
        {props.filters?.map((item, index) => (
          <li key={index} className="w-full gap-3 flex items-center">
            <input
              defaultChecked = {item.isChecked}
              onChange={(e) => handleChecboxChange(e, item.text)}
              type="checkbox"
              className="cursor-pointer rounded-full overflow-hidden border-2 border-white"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <div
        className={`relative mb-6 ${
          !props.type || props.type === "default" ? "hidden" : "block"
        }`}
      >
        <input
          onChange={handelRange}
          type="range"
          min="0"
          max="1500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        {/* <RangeSlider /> */}
      </div>
    </div>
  );
}

export default Filter;
