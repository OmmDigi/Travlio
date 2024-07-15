import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import Image from "next/image";
import ImageWithText from "./ImageWithText";
import Link from "next/link";
import ContactMenuBtn from "./ContactMenuBtn";
import ForexCardImg from "@/public/forex-card.webp";
import RewardImg from "@/public/rewards.webp";

function Deal() {
  return (
    <section
      className={`w-full ${GLOBAL_X_PADDING} grid grid-cols-2 sm:grid-cols-1 gap-10 py-10 pt-20`}
    >
      <div className="relative w-full">
        <div className="absolute pt-10 px-10 w-full h-full bg-[#00000091] sm:pt-8">
          <h2 className=" text-white font-semibold tracking-widest text-[35px] sm:text-[23px]">
            Explore our Forex card Services.
          </h2>
          <Link
            className="text-white blinkAnimation sm:text-sm"
            href="https://www.thomascook.in/foreign-exchange"
          >
            Click here to know more.
          </Link>
      
        </div>
        <Image src={ForexCardImg} alt="Forex card Services" sizes="(min-width: 808px) 50vw, 100vw" />
      </div>

      <div className="relative w-full shadow-2xl">
        <div className="absolute h-full  w-full flex flex-col justify-center px-10 bg-[#00000091]">
          <h2 className=" text-white font-semibold tracking-widest text-[22px] sm:text-[15px]">
            Escape, Explore, Save: Exclusive Tour Discounts for Thrill-Seekers!
          </h2>
          <ContactMenuBtn text="Contact Us Now" className="blinkAnimation w-full text-left text-white" />
        </div>
        <Image src={RewardImg} alt="Exclusive Tour Discounts for Thrill-Seekers!" sizes="(min-width: 808px) 50vw, 100vw" />
      </div>
    </section>
  );
}

export default Deal;
