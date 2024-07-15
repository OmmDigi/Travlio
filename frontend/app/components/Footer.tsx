import Image from "next/image";
import React from "react";
import { GLOBAL_X_PADDING } from "../constant";
import Link from "next/link";
import { TbCopyright } from "react-icons/tb";
import Script from "next/script";

function Footer() {
  return (
    <>
      <footer
        className={`w-full flex items-start sm:flex-col py-10 gap-12 sm:px-10 sm:gap-0 h-72 sm:h-auto bg-[#222222] ${GLOBAL_X_PADDING}`}
      >
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YQ1NB78HK4"
        />
        <Script id="googletagmanager">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-YQ1NB78HK4');
        `}
        </Script>
        <div className="text-white w-96 text-justify">
          <Image
            src="/footerLogo.png"
            alt="footerLogo"
            height={160}
            width={160}
          />
          <h2 className="font-extrabold mt-4">About Travlio</h2>
          <p className="font-medium text-sm mt-1 sm:mr-28">
            Your best travel agency in Kolkata for domestic & international tour
            packages. Our expert guides ensure unforgettable journeys.
          </p>
        </div>

        <div className="text-white pt-12 w-96 text-justify">
          <h2 className="font-extrabold">Quick Links</h2>
          <div className="w-full grid grid-cols-2 gap-3 mt-4 sm:grid-cols-1">
            <Link
              href="/"
              className="text-[14px] text-[#94999F] hover:text-red-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-[14px] text-[#94999F] hover:text-red-300 transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              href="/tours"
              className="text-[14px] hover:text-red-300 text-[#94999F] transition-all duration-300"
            >
              Tour Packages
            </Link>
            <Link
              href="/gallery"
              className="text-[14px] hover:text-red-300 text-[#94999F] transition-all duration-300"
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className="text-[14px] hover:text-red-300 text-[#94999F] transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/blogs"
              className="text-[14px] hover:text-red-300 text-[#94999F] transition-all duration-300"
            >
              Blogs
            </Link>
          </div>
        </div>

        <div className="pt-12 w-96 text-justify sm:pr-10">
          {/* <h2 className="font-extrabold text-white">Newsletter</h2>

          <div className="h-8 flex items-center mt-4 sm:flex-col sm:items-start">
            <input
              className="h-full outline-none px-3 text-sm sm:py-2 sm:w-full"
              type="text"
              placeholder="Email id"
            />
            <button title="Form Submit Button" className="h-full bg-[#093F88] text-white font-semibold px-6 text-sm sm:w-full sm:py-8">
              SUBMIT
            </button>
          </div> */}
          <h2 className="font-extrabold text-white">Office Locations</h2>
          <div className="w-full text-sm text-gray-300 mt-3 flex flex-col gap-5">
            <Link href="https://maps.app.goo.gl/TZ9vQRj6UHAaL6iXA">
              Shop No 9/38, Jhautala, near Aminia Restaurant, Chinar Park,
              Kolkata, West Bengal 700157
            </Link>
            <Link href="https://maps.app.goo.gl/cHrSCpa4BDMKzC138">
              AD 77, Sector 1, Saltalke, Kolkata - 700064, Kolkata, West Bengal
              700064
            </Link>
            <Link href="https://maps.app.goo.gl/H1W3N4YDjSf1Lv2AA">
              55, Gariahat Rd, Dover Terrace, Ballygunge, Kolkata, West Bengal
              700019
            </Link>
          </div>
        </div>
      </footer>

      {/* <div
        className={`w-full h-10 bg-[#181818] text-gray-300 flex items-center justify-between ${GLOBAL_X_PADDING}`}
      >
        <div className="flex items-center gap-2">
          <TbCopyright size={16} />
          <span className="text-sm">2024 Travlio. All Rights Reserved.</span>
        </div>
        <div className="space-x-1">
          <span className="text-xs">Digital Partner: </span>
          <span>
            <Link
              className="font-semibold text-[12px]"
              href="https://ommdigitalsolution.com/"
            >
              OMM DIGITAL SOLUTION PVT. LTD.
            </Link>
          </span>
        </div>
      </div> */}
    </>
  );
}

export default Footer;
