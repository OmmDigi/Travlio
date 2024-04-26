import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import Image from "next/image";
import ImageWithText from "./ImageWithText";
import Link from "next/link";
import ContactMenuBtn from "./ContactMenuBtn";

function Deal() {
  return (
    // <section className={`w-full ${GLOBAL_X_PADDING} grid grid-cols-2 h-[25rem] sm:grid-cols-1`}>
    //   <div className="w-full bg-[#FA7B57] h-full flex items-center gap-3 justify-center flex-col px-20 sm:h-[300px] sm:px-5">
    //     <h2 className="text-[#EEEE22] font-arca text-4xl">Win Big</h2>
    //     <p className="text-center text-white font-medium">
    //       with our lottery on tour packages. Book now for a chance of a
    //       lifetime!
    //     </p>
    //     <button className="bg-gray-800 text-white px-6 py-3 text-[12px] font-semibold tracking-wide rounded-sm shadow">LEARN MORE</button>
    //   </div>
    //   <div className="w-full bg-[#173559] h-full flex items-center justify-center flex-col">
    //     <Image src = "/Exclusive-deals.jpg" alt="Exclusive-deals" height={500} width={500}/>
    //   </div>
    // </section>
    <section
      className={`w-full ${GLOBAL_X_PADDING} grid grid-cols-2 sm:grid-cols-1 gap-10 py-10 pt-20`}
    >
      {/* <ImageWithText text="Foreign Exchange Card" subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, aut saepe asperiores ad officiis. Distinctio hic a sit cum repellat, harum illo sunt? Iure impedit quis vel laborum repudiandae." img="/forex card.webp"/>
      <ImageWithText text="Valo Khap" subtext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde, aut saepe asperiores ad officiis. Distinctio hic a sit cum repellat, harum illo sunt? Iure impedit quis vel laborum repudiandae." img="/rewards.webp"/> */}
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
          {/* <p className="text-[13px] text-white pt-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
        </div>
        <Image src="/forex card.webp" alt="" height={1200} width={1200} />
      </div>

      <div className="relative w-full shadow-2xl">
        <div className="absolute h-full  w-full flex flex-col justify-center px-10 bg-[#00000091]">
          <h2 className=" text-white font-semibold tracking-widest text-[22px] sm:text-[15px]">
            Escape, Explore, Save: Exclusive Tour Discounts for Thrill-Seekers!
          </h2>
          <ContactMenuBtn text="Contact Us Now" className="blinkAnimation w-full text-left text-white" />
        </div>
        <Image src="/rewards.webp" alt="" height={1200} width={1200} />
      </div>
    </section>
  );
}

export default Deal;
