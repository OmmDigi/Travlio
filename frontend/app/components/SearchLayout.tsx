import React from "react";
import SearchInput from "./SearchInput";
import MobileFilterBtn from "./filters/MobileFilterBtn";

function SearchLayout() {
  return (
    <div className="flex items-center justify-between w-[40%]">
      <div className="sm:hidden"></div>
      <SearchInput className="w-full sm:w-[100%]" />
      <MobileFilterBtn />
    </div>
  );
}

export default SearchLayout;
