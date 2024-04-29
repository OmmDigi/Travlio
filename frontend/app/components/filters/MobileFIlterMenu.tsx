import React from "react";
import Filter from "./Filter";

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

function MobileFIlterMenu() {
  return (
    <div className="w-full h-full relative">
      <div className=" w-[60%] bg-white absolute bottom-0 top-0 right-0 px-3 py-4">
        <div className="w-full flex items-center justify-between border-b pb-2 px-2">
          <span className="font-semibold">FILTERS</span>
          {/* <span className="text-[13px] text-gray-600 cursor-pointer">
            Reset
          </span> */}
        </div>
        <Filter name="Duration" filters={duration} />
        <Filter name="Tour Type" filters={tourType} />
      </div>
    </div>
  );
}

export default MobileFIlterMenu;
