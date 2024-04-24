"use client";

import { API_BASE_URL } from "@/app/constant";
import { IResponse } from "@/app/types";
import Link from "next/link";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

function ContactUsDialog() {
  const addressinfo = [
    {
      place: "CHINAR PARK BRANCH",
      address: "9/38, Jhautala Chinar Park Kolkata – 700157",
      number: "033 46000164",
      email: "gcpchinarpark@thomascook.in",
    },
    {
      place: "SALT LAKE BRANCH",
      address: "AL-2, Salt Lake, Sector-2, Kolkata – 700091",
      number: "033 40006464",
      email: "gcpsaltlake@thomascook.in",
    },
    {
      place: "BALLYGUNGE BRANCH",
      address: "55, Gariahat Rd, Ballygunge, Kolkata-700019",
      number: "033 40014064",
      email: "gcp.ballygunge@thomascook.in",
    },
  ];

  const [isMailSending, setIsMailSending] = useState(false);
  const [message, setMessage] = useState("");

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const API = `${API_BASE_URL}/sendemail`;
    setIsMailSending(true);
    setMessage("");
    const response = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body : JSON.stringify({
        type : "contact",
        name : formData.get("name"),
        number : formData.get("number"),
        email : formData.get("email"),
        message : formData.get("message")
      })
    });

    const results = await response.json() as IResponse<any>;

    setIsMailSending(false);
    setMessage(results.message);
    
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-[60%] h-[28rem] bg-[#d8d8d8] overflow-hidden overflow-y-auto rounded-sm shadow grid grid-cols-2 transition-all duration-300 sm:w-full sm:mx-3 sm:grid-cols-1`}
    >
      <div className="text-black px-10 py-10">
        <h2 className="font-semibold tracking-widest">LEAVE US YOUR INFO</h2>
        <span className="text-xs">and we will get back to you!!</span>

        <form
          onSubmit={onFormSubmit}
          className="text-gray-500 w-full mt-4 space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Full name"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
          />
          <input
            name="number"
            type="text"
            placeholder="Mobile number"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
          />
          <input
            name="email"
            type="text"
            placeholder="Email id"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
            rows={4}
          ></textarea>
          <button disabled = {isMailSending} className={`w-full text-sm font-semibold py-2 text-gray-200 ${isMailSending ? "bg-blue-300" : "bg-blue-400"}`}>
            SUBMIT
          </button>
          <span className={`text-sm text-green-600`}>{message}</span>
        </form>
      </div>

      <div className="text-black px-10 py-10">
        <h2 className="font-semibold tracking-widest">FIND OUT OUR BRANCH</h2>
        <span className="text-xs">Caption</span>

        <ul className="w-full grid grid-cols-1 mt-4 gap-6">
          {addressinfo.map((item, index) => (
            <li key={index} className="w-full">
              <div className="flex items-start gap-3">
                <CiLocationOn size={20} />
                <div>
                  <h2 className="font-semibold text-sm text-gray-600 leading-none">
                    {item.place}
                  </h2>
                  <span className="text-xs block mt-[6px]">{item.address}</span>
                  <Link
                    className="text-xs leading-none text-blue-500"
                    href={`tel:${item.number.replaceAll(" ", "")}`}
                  >
                    {item.number}
                  </Link>
                  <Link
                    className="text-xs leading-none block text-blue-500"
                    href={`mailto:${item.email}`}
                  >
                    {item.email}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ContactUsDialog;
