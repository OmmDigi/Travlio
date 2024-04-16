import PageIntroBanner from "@/app/components/PageIntroBanner";
import React from "react";
import { MdFlight } from "react-icons/md";
import { MdLocalHotel } from "react-icons/md";
import { BiImage } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { API_BASE_URL } from "@/app/constant";
import { ITours } from "@/app/types";

async function page({params} : {params : { ID : number }}) {
  const URL = `${API_BASE_URL}/tour/${params.ID}`;

  const response = await fetch(URL);
  const tour = await response.json();

  const tourResponse = await fetch(`${API_BASE_URL}/tour/${params.ID}?tableName=tour`);
  const tourResult = await tourResponse.json() as ITours;


  return (
    <section className="w-full">
      <PageIntroBanner src={tourResult.IMG} className="h-72 object-cover"/>

      <div className="w-full flex items-start sm:flex-col">
        <div className="w-[60%] px-10 py-9 sm:w-full">
          <h1 className="text-2xl font-semibold text-gray-700">
            {tour.title}
          </h1>
          <ul className="w-full grid grid-cols-3 mt-5 gap-8 border-b pb-8 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <MdFlight className="rotate-45" color="#1D57BA" size={23} />
              <span className="font-semibold text-gray-600 text-sm">
                Flights
              </span>
            </li>

            <li className="flex items-center gap-2">
              <MdLocalHotel color="#1D57BA" size={23} />
              <span className="font-semibold text-gray-600 text-sm">
                Hotels
              </span>
            </li>

            <li className="flex items-center gap-2">
              <BiImage color="#1D57BA" size={23} />
              <span className="font-semibold text-gray-600 text-sm">
                Sightseeing
              </span>
            </li>

            <li className="flex items-center gap-2">
              <FaRegAddressCard color="#1D57BA" size={22} />
              <span className="font-semibold text-gray-600 text-sm">Visa</span>
            </li>

            <li className="flex items-center gap-2">
              <GiMeal color="#1D57BA" size={22} />
              <span className="font-semibold text-gray-600 text-sm">Meals</span>
            </li>

            <li className="flex items-center gap-2">
              <FaUser color="#1D57BA" size={18} />
              <span className="font-semibold text-gray-600 text-sm">
                Tour Manager
              </span>
            </li>
          </ul>

          <div className="tourInfo" dangerouslySetInnerHTML={{__html : tour.htmlDescription || ""}}>

          </div>
        </div>
        <div className="w-[40%] h-full flex items-start justify-center px-20 sm:w-full sm:mt-3 sm:px-5">
          <div className="bg-[#E3E6F7] w-full h-auto rounded-md shadow-md -translate-y-20 px-10 py-10">
            <span className="font-semibold">Price</span>
            <div className="w-full pt-4 flex items-center gap-4">
              <IoPricetagOutline size={26} />
              <span className="text-2xl font-extrabold">{tourResult.PRICE}</span>
            </div>
            <form className="flex flex-col gap-6 mt-8">
              <div>
                <span className="font-semibold outline-blue-500">
                  Full Name *
                </span>
                <input type="text" className="w-full py-3" />
              </div>

              <div>
                <span className="font-semibold outline-blue-500">
                  Email Address *
                </span>
                <input type="text" className="w-full py-3" />
              </div>

              <div>
                <span className="font-semibold outline-blue-500">
                  Your Enquiry *
                </span>
                <textarea className="w-full py-3" rows={5}></textarea>
              </div>

              <div>
                <input type="checkbox" /> {"  "} * I agree with Terms of Service and
                Privacy Statement.
              </div>

              <button className="bg-[#275B8B] font-semibold text-sm text-white py-4 hover:bg-[#3d71a1] transition-all duration-500">
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
}

export default page;
