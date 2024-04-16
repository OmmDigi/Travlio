import React from "react";
import Filter from "./Filter";

function MobileFIlterMenu() {
  return (
    <div className="w-full h-full relative">
      <div className=" w-[60%] bg-white absolute bottom-0 top-0 right-0 px-3 py-4">
        <div className="w-full flex items-center justify-between border-b pb-2 px-2">
          <span className="font-semibold">FILTERS</span>
          <span className="text-[13px] text-gray-600 cursor-pointer">
            Reset
          </span>
        </div>
        <Filter name="Duration" filters={["1 Day Tour", "2-4 Dasy Tour"]} />
        <Filter name="Month" filters={["1 Day Tour", "2-4 Dasy Tour"]} />
        <Filter name="Destination" filters={["1 Day Tour", "2-4 Dasy Tour"]} />
      </div>
    </div>
  );
}

export default MobileFIlterMenu;
