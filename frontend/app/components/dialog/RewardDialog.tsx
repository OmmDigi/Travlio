"use client";

import React, { useRef, useState } from "react";
import Select from "../Select";
import { LuHardDriveUpload } from "react-icons/lu";
import { SEND_EMAIL_API } from "@/app/constant";
import { IResponse } from "@/app/types";
import axios from "axios";

function RewardDialog() {
  const destinationOptions = [
    "Europe",
    "Switzerland",
    "The UK",
    "Paris",
    "Belgium",
    "Netherland",
    "Germany",
    "Austria",
    "Italy",
    "Himachal",
    "Kashmir",
    "Ladakh",
    "Shillong & Guwahati",
    "Uttarakhand",
    "Goa",
    "Mauritius",
  ];

  const filePickerInputRef = useRef<HTMLInputElement>(null);
  const [isMailSending, setIsMailSending] = useState(false);
  const [message, setMessage] = useState("");

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsMailSending(true);
    setMessage("");
    const formData = new FormData(event.currentTarget);

    const response = await fetch(SEND_EMAIL_API, {
      method: "POST",
      headers: { 'Content-Type': 'multipart/form-data' },
      body: JSON.stringify({
        type: "rewards",
        name: formData.get("name"),
        number: formData.get("number"),
        email: formData.get("destination"),
      }),
    });

    const results = (await response.json()) as IResponse<any>;

    setIsMailSending(false);
    setMessage(results.message);
  };

  return (
    <div
      className={`w-[60%] h-[28rem] bg-[#2E5C91] rounded-sm shadow grid grid-cols-2 transition-all duration-300 sm:w-full sm:grid-cols-1 sm:h-auto`}
    >
      <div className="text-white px-10 py-10">
        <h2 className="font-semibold tracking-widest">LEAVE US YOUR INFO</h2>
        <span className="text-xs">and we will get back to you!!</span>

        <form
          onSubmit={onFormSubmit}
          className="text-gray-500 w-full mt-4 space-y-4"
        >
          <input
            required
            name="name"
            type="text"
            placeholder="Full name"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
          />
          <input
            required
            name="number"
            type="text"
            placeholder="Mobile number"
            className="text-sm rounded-sm w-full px-3 py-[0.35rem] outline-none"
          />
          <Select
            name="destination"
            selectClassName="py-1 px-2"
            className="w-full px-0"
            title="Preferred Destination"
            options={destinationOptions}
          />

          <div
            onClick={() => filePickerInputRef.current?.click()}
            rel="file-picker"
            className="w-full relative h-20 bg-white space-y-2 flex items-center justify-center flex-col text-sm cursor-pointer"
          >
            <LuHardDriveUpload size={23} />
            <span>Click and upload an image in 10MB</span>
            <input
            name="reward-image"
            required
            ref={filePickerInputRef}
            type="file"
            className="absolute -z-10"
            accept="image/*"
          />
          </div>
          <button
            disabled={isMailSending}
            className={`w-full ${
              isMailSending ? "bg-blue-300" : "bg-blue-400"
            } text-sm font-semibold py-2 text-gray-200`}
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="w-full h-full px-10 py-10 text-white">
        {/* <Image src="/reward-svg.svg" alt="svg-reward" width={250} height={250}/> */}
        <h2 className="font-semibold tracking-widest">
          WELCOME TO LUCKY DRAW CONTEST
        </h2>
        <span className="text-xs">
          Participate and win discounts on your next international trip with us.
        </span>

        <h2 className="font-semibold tracking-widest mt-3">
          TERMS & CONDITIONS
        </h2>
        <ul className="text-xs text-justify list-disc space-y-2 mt-2">
          <li>Fill up the form with your name and contact details.</li>
          <li>
            Give us a high-quality photograph of your previous international
            trip with yourself or your family present in it.
          </li>
          <li>The results will be published by the 15th of every month.</li>
          <li>Image Size should be within 10 MB.</li>
        </ul>
      </div>
    </div>
  );
}

export default RewardDialog;
