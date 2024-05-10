import React from "react";
import { BASE_URL, GLOBAL_X_PADDING } from "../constant";
import { FaMapLocationDot } from "react-icons/fa6";
import Link from "next/link";
import ContactPageForm from "./ContactPageForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travlio (Thomas Cook Kolkata)",
  description:
    "Contact us for booking your international or domestic packages from Kolkata. Also, get the office addresses of Travlio (Thomas Cook) for visiting us.",
  alternates: {
    canonical: BASE_URL + "/contact-us",
  },
};

function page() {
  return (
    <div className={`${GLOBAL_X_PADDING} sm:mt-3 min-h-full py-10`}>
      <div className="flex items-center justify-center flex-col gap-2">
        <h1 className="text-center text-4xl font-bold text-gray-600">
          Contact us!
        </h1>
        <div className="h-[1px] bg-gray-300 w-40"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 py-10 px-20 sm:px-5">
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <div className="size-12">
              <div className="size-10 bg-[#5e5e5e] flex items-center justify-center">
                <FaMapLocationDot size={18} color="#f9f9f9" />
              </div>
            </div>
            <Link href="https://maps.app.goo.gl/TZ9vQRj6UHAaL6iXA" className="font-[600] text-sm animate-pulse">
              Shop No 9/38, Jhautala, near Aminia Restaurant, Chinar Park,
              Kolkata, West Bengal 700157
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-12">
              <div className="size-10 bg-[#5e5e5e] flex items-center justify-center">
                <FaMapLocationDot size={18} color="#f9f9f9" />
              </div>
            </div>
            <Link href="https://maps.app.goo.gl/cHrSCpa4BDMKzC138" className="font-[600] text-sm animate-pulse">
              AD 77, Sector 1, Saltalke, Kolkata - 700064, Kolkata, West Bengal
              700064
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-12">
              <div className="size-10 bg-[#5e5e5e] flex items-center justify-center">
                <FaMapLocationDot size={18} color="#f9f9f9" />
              </div>
            </div>
            <Link href="https://maps.app.goo.gl/H1W3N4YDjSf1Lv2AA" className="font-[600] text-sm animate-pulse">
              55, Gariahat Rd, Dover Terrace, Ballygunge, Kolkata, West Bengal
              700019
            </Link>
          </div>
          <div className="w-full">
            <p>
              <Link href="mailto:subrata.ash@gmail.com" className="font-semibold text-green-700">
                Email Us : subrata.ash@gmail.com
              </Link>
            </p>
            <span>OR</span>
            <p>
              <Link href="tel:9831234910" className="font-semibold text-blue-500">Contact Us : 9831234910</Link>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <ContactPageForm />
        </div>
      </div>
    </div>
  );
}

export default page;
