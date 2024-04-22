import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import Image from "next/image";

function Deal() {
  return (
    <section className={`w-full ${GLOBAL_X_PADDING} grid grid-cols-2 h-[25rem] sm:grid-cols-1`}>
      <div className="w-full bg-[#FA7B57] h-full flex items-center gap-3 justify-center flex-col px-20 sm:h-[300px] sm:px-5">
        <h2 className="text-[#EEEE22] font-arca text-4xl">Win Big</h2>
        <p className="text-center text-white font-medium">
          with our lottery on tour packages. Book now for a chance of a
          lifetime!
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 text-[12px] font-semibold tracking-wide rounded-sm shadow">LEARN MORE</button>
      </div>
      <div className="w-full bg-[#173559] h-full flex items-center justify-center flex-col">
        <Image src = "/Exclusive-deals.jpg" alt="Exclusive-deals" height={500} width={500}/>
      </div>
    </section>
  );
}

export default Deal;
