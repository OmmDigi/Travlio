"use client";

import React, { useState } from "react";
import { GLOBAL_X_PADDING } from "../constant";
import { IoAddSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";


function MoreAboutUs() {
  const [isCollasable, setIsCollasable] = useState(false);
  

  return (
    <div className={`${GLOBAL_X_PADDING} py-10`}>
      <div onClick={() => setIsCollasable(!isCollasable)} className="w-full flex items-center justify-center relative cursor-pointer">
        <h2 className="font-extrabold text-3xl">More About Us</h2>
        <IoAddSharp className={`absolute left-0 ${isCollasable ? "hidden" : "block"}`} />
        <FiMinus className={`absolute left-0 ${isCollasable ? "block" : "hidden"}`} />
      </div>

      <div className={`font-[500] text-[15px] text-slate-500 pt-10 ${isCollasable ? "block" : "hidden"}`}>
        <p>
          We are one of the most eligible travel agency in Kolkata that provides
          tour packages to customers with a proper understanding of their
          choices and preferences in the tour. With our services of tour
          packages, we provide extensive management which makes the tourists
          more comfortable with us. Details of the tour with proper managerial
          assistance are provided to our users which makes the experiences more
          successful making our customers further inclined to our packages. Our
          tour packages are primarily reliant on the resources of good places
          that provide comfortable facilities to our travelers while providing
          them with better conveniences. <br />
          <br />
          As we have different packages of tour destinations, it helps us to
          focus on our attributes while making the services more
          customer-centric. We provide various tour packages to our consumers as
          we tend to identify international packages alongside domestic
          destinations. We provide Europe tour packages that are quite exclusive
          in our agency as we have various packages for different destinations
          in Europe. Since we are quite a renowned travel agency in Kolkata, it
          has made our attributes for packaging tour resources more intriguing
          for the customers. As our packages are developed with proper customer
          preferences, it helps us to design package costs and other facilities
          for the tourists.
        </p>
      </div>
    </div>
  );
}

export default MoreAboutUs;
