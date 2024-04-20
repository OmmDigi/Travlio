import React from "react";
import SearchInput from "./SearchInput";
import MobileFilterBtn from "./filters/MobileFilterBtn";

function SearchLayout() {
  return (
    <div className="w-full flex items-center justify-between mb-6">
      <div className="sm:hidden"></div>
      <SearchInput className="w-[40%] sm:w-[100%]" />
      <MobileFilterBtn />
    </div>
  );
}

export default SearchLayout;
