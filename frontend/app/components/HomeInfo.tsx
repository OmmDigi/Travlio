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
          <h1 className="font-bold text-[32px] text-center w-full sm:text-[18px] leading-none font-montserrat tracking-wider">
            TRAVLIO
          </h1>
          <p className="w-full pt-4 text-center text-[18px] leading-none font-[500] italic">
            The Best Travel Agency in Kolkata
          </p>
          <p className="w-full text-justify text-[#202020] font-light text-[16px] pt-8 sm:text-[14px] sm:text-left">
            Explore the world hassle-free with Travlio, Kolkata's best travel
            agent. Book now and make your travel dreams a reality. Our services
            include:
          </p>

          <ul className="list-disc pl-4 space-y-2 mt-3 text-[15px] text-justify">
            <li>Travel planning for domestic and international destinations</li>
            <li>Convenient forex card services for easy currency management</li>
            <li>Personalized assistance to ensure a memorable journey</li>
          </ul>
        </div>

        <TourForm />
      </div>
    </section>
  );
}

export default HomeInfo;
