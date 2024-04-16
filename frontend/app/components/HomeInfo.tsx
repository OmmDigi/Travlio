import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import Select from "./Select";
import Image from "next/image";
import Service from "./Service";
import TourForm from "./TourForm";

function HomeInfo() {
  return (
    <section className={`w-full ${GLOBAL_X_PADDING} mt-16 sm:mt-3`}>
      <div className="w-full px-20 sm:px-5 rounded-sm homeInfoSection border text-gray-800 grid grid-cols-2 gap-32 sm:grid-cols-1 sm:gap-10 sm:py-10">
        <div className="my-16 sm:my-0">
          <h2 className="font-[1000] text-[23px] text-justify sm:text-[18px]">
            Travlio - The Best Travel Agency in Kolkata
          </h2>
          <p className="w-full text-justify text-[#202020] font-light text-[16px] pt-3 sm:text-[14px] sm:text-left">
            We offer the best tour packages from Kolkata to various
            international and domestic destinations, ensuring seamless journeys
            tailored to your needs. Additionally, enquire now to embark on an
            unforgettable adventure with us!
          </p>
        </div>

        <TourForm />
      </div>
    </section>
  );
}

export default HomeInfo;
