"use client";

import React, { useState } from "react";
import Select from "./Select";
import { SEND_EMAIL_API } from "../constant";
import { IResponse } from "../types";

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
const durationOptions = [
  "15 days 14 nights",
  "11 days 10 nights",
  "10 days 9 nights",
  "7 days 6 nights",
];

function TourForm() {
  const [isMailSending, setIsMailSending] = useState(false);
  const [message, setMessage] = useState("");

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsMailSending(true);
    setMessage("");
    const response = await fetch(SEND_EMAIL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "tour",
        name : formData.get("name"),
        destination: formData.get("destination"),
        duration: formData.get("duration"),
        number: formData.get("mobile-number"),
        email: formData.get("email-id"),
      }),
    });

    const result = (await response.json()) as IResponse<any>;
    setIsMailSending(false);
    setMessage(result.message);
  };
  return (
    <form
      onSubmit={onFormSubmit}
      className="text-gray-600 font-medium w-full my-16 sm:my-0 space-y-5"
    >
      <div className="w-full flex items-center justify-center flex-col">
      <h2 className="font-semibold tracking-widest">LEAVE US YOUR INFO</h2>
      <span className="text-xs">and we will get back to you!!</span>
      </div>
      <input
        required
        name="name"
        type="text"
        placeholder="Your name"
        className="text-sm rounded-sm w-full px-3 py-[0.60rem] outline-none border"
      />
      <input
        required
        name="mobile-number"
        type="text"
        placeholder="Mobile Number"
        className="text-sm rounded-sm w-full px-3 py-[0.60rem] outline-none border"
      />
      <input
        required
        name="email-id"
        type="email"
        placeholder="Email id"
        className="text-sm rounded-sm w-full px-3 py-[0.60rem] outline-none border"
      />
      <Select
        name="destination"
        className="w-full rounded-sm py-[0.60rem] border"
        title="Destination"
        options={destinationOptions}
      />
      <Select
        name="duration"
        className="w-full rounded-sm py-[0.60rem] border"
        title="Duration"
        options={durationOptions}
      />
      <button
        disabled={isMailSending}
        title="submit button"
        className={`w-full text-white py-2 text-sm transition-all duration-300 ${
          isMailSending ? "bg-[#4379c0]" : "bg-[#093F88] hover:bg-[#32598d]"
        }`}
      >
        SUBMIT
      </button>
    </form>
  );
}

export default TourForm;
