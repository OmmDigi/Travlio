import Image from "next/image";
import React from "react";
import { BASE_URL, GLOBAL_X_PADDING } from "../constant";
import PageIntroBanner from "../components/PageIntroBanner";
import { IoMdAirplane } from "react-icons/io";
import AboutServiceItem from "./AboutServiceItem";
import { MdAirportShuttle } from "react-icons/md";
import { SiAirbyte } from "react-icons/si";
import { SiBoost } from "react-icons/si";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import ContactMenuBtn from "../components/ContactMenuBtn";
import { FaRegAddressCard } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Travlio",
  description:
    "Travlio is an authorized gold partner of Thomas Cook India. Learn more about us, our services, and our top destinations.",
  alternates: {
    canonical: BASE_URL + "/about-us",
  },
};

function page() {
  const topDestinationsList = [
    {
      image: "/himachal.webp",
    },
    {
      title: "EUROPE",
      subtitle:
        "Unravel Europe's timeless allure. From the romantic streets of Paris to the historic sites of Rome, each destination is a tapestry of culture and beauty. Explore diverse landscapes, savor exquisite cuisines, and immerse yourself in centuries of history. Embark on a journey that promises endless discovery and enchantment.",
    },

    {
      image: "/greece.webp",
    },

    {
      title: "HIMACHAL",
      subtitle:
        "Discover the enchanting beauty of Himachal Pradesh, India's northern gem. Himachal Tourism offers a haven for nature lovers, adventure seekers, and spiritual wanderers alike. From the majestic peaks of the Himalayas to lush valleys and serene lakes, explore a land brimming with vibrant culture, warm hospitality, and unforgettable experiences.",
    },

    {
      image: "/europe.webp",
    },

    {
      title: "GREECE",
      subtitle:
        "Experience the allure of Greece, where ancient history meets breathtaking landscapes and vibrant culture. Explore iconic sites like the Acropolis in Athens, relax on picturesque islands like Santorini and Mykonos, and indulge in delicious Mediterranean cuisine. With sun-soaked beaches and historic ruins, Greece promises an unforgettable adventure.",
    },
  ];

  return (
    <section className="w-full relative">
      <Image
        className="w-full sm:h-[720px] sm:object-cover"
        src="/about-banner.webp"
        alt=""
        height={1200}
        width={1200}
      />
      <div className="w-full absolute top-0 flex items-center justify-start h-[550px] flex-col pt-60 sm:pt-52">
        <h2 className="font-bebas text-[90px] tracking-[15px] text-gray-50 sm:text-[50px] sm:tracking-[5px]">
          TRAVLIO
        </h2>
        <p className="text-white w-[650px] text-center text-lg sm:text-sm sm:w-full">
          Best Travel Agency in Kolkata for your domestic & International tours.
        </p>
        <ContactMenuBtn className="font-normal w-40 py-2 border-2 border-white font-bebas text-white mt-10 sm:mt-5 tracking-widest hover:bg-white text-sm hover:text-black transition-all duration-500 pt-2" />

        <div className="w-full flex items-center justify-start flex-col mt-44 sm:mt-36 sm:px-9">
          <h1 className="source-sans-3-600 text-gray-800 text-3xl">ABOUT US</h1>
          <p className="w-[850px] text-center text-sm source-sans-3-400 mt-4 sm:w-full">
            Explore the world with Travlio (Authorised Gold Partner of Thomas
            Cook Kolkata). We specialize in crafting personalized journeys that
            exceed your expectations. Let us be your guide to unforgettable
            adventures.
          </p>

          <ul className="grid grid-cols-2 w-[70%] gap-8 py-10 sm:w-full sm:grid-cols-1">
            <AboutServiceItem
              subtext="Our international and domestic tours offer unforgettable experiences for every traveler."
              text="International & Domestic Tours"
              itemsDirection="right"
              icon={
                <div className="size-14 flex items-center justify-center bg-cyan-600">
                  <IoMdAirplane size={28} color="#fff" />
                </div>
              }
            />

            <AboutServiceItem
              text="Forex Card Services"
              subtext="Experience hassle-free spending abroad with our convenient Forex card services."
              itemsDirection="left"
              icon={
                <div className="size-14 flex items-center justify-center bg-green-600">
                  <FaRegAddressCard size={28} color="#fff" />
                </div>
              }
            />

            <AboutServiceItem
              text="24/7 Support"
              subtext="Round-the-clock assistance ensures peace of mind at every step of your journey."
              itemsDirection="right"
              icon={
                <div className="size-14 flex items-center justify-center bg-blue-600">
                  <MdSupportAgent size={28} color="#fff" />
                </div>
              }
            />
            <AboutServiceItem
              text="Seamless Logistics"
              subtext="Coordinated transportation, accommodations, and activities for a stress-free travel experience."
              itemsDirection="left"
              icon={
                <div className="size-14 flex items-center justify-center bg-red-600">
                  <MdOutlineEmojiTransportation size={28} color="#fff" />
                </div>
              }
            />
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-start flex-col mt-36 sm:mt-[30rem]">
        <h2 className="source-sans-3-600 text-gray-800 text-lg tracking-wider">
          TOP DESTINATIONS
        </h2>
        <ul className="w-[70%] grid grid-cols-3 mt-9 sm:grid-cols-1 sm:gap-6">
          {topDestinationsList.map((item, index) => (
            <li key={index} className="w-full h-64 sm:h-auto">
              {item.image ? (
                <Image
                  className="w-full h-full"
                  src={item.image}
                  alt=""
                  height={1024}
                  width={1024}
                />
              ) : null}

              {!item.image ? (
                <div className="w-full flex items-center justify-start flex-col p-10 sm:p-0 sm:items-start">
                  <h2 className="text-center source-sans-3-700 text-gray-800 text-[15px]">
                    {item.title}
                  </h2>
                  <p className="text-center text-xs pt-1 sm:text-justify">{item.subtitle}</p>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

 
      <div className="grid grid-cols-2 mt-7 aboutBottomBanner sm:grid-cols-1">
        <div className="p-10 px-20 sm:px-5">
          <h2 className="font-semibold text-2xl tracking-widest">
            WHY CHOOSE US ?
          </h2>
          <div className="w-full source-sans-3-200 text-justify mt-3 bg-[#0000008f] p-5">
            <p className="source-sans-3-200 text-white">
              With a passion for crafting bespoke experiences, we tailor each
              journey to your unique desires. Our expert advisors provide
              insider insights and seamless logistics, ensuring every moment
              exceeds expectations. From serene escapes to adrenaline-fueled
              adventures, we specialize in curating unforgettable memories.
            </p>
            <p className="mt-3 source-sans-3-200 text-white">
              With 24/7 support and a commitment to excellence, your peace of
              mind is our priority. Choose us for unrivaled expertise,
              personalized service, and a world of possibilities waiting to be
              explored. Let us be your guide as you embark on the journey of a
              lifetime, leaving no dream unfulfilled.
            </p>
          </div>
        </div>
        <form className="w-full p-10 px-40 mt-5 space-y-3 sm:px-5 sm:mt-0">
          <input
            className="px-2 bg-slate-100 outline-none border-2 py-[0.45rem] text-gray-700 text-sm w-full"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="px-2 bg-slate-100 outline-none border py-[0.45rem] text-gray-700 text-sm w-full"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="px-2 bg-slate-100 outline-none border-2 py-[0.45rem] text-gray-700 text-sm w-full"
            type="text"
            placeholder="Email Address"
          />

          <textarea
            rows={5}
            className="px-2 bg-slate-100 outline-none border-2 py-[0.45rem] text-gray-700 text-sm w-full"
            placeholder="Email Address"
          ></textarea>

          <button className="w-full text-sm source-sans-3-400 tracking-widest border-2 bg-cyan-500 text-white font py-[0.45rem]">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default page;
