"use client";

import React, { useState } from "react";
import SpinnerSvg from "../components/SpinnerSvg";
import { IResponse } from "../types";
import { SEND_EMAIL_API } from "../constant";

function ContactPageForm() {
  const [isMailSending, setIsMailSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsMailSending(true);
    setMessage(null);
    const response = await fetch(SEND_EMAIL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "contact",
        name: formData.get("name"),
        number: formData.get("number"),
        message: formData.get("message"),
        email: formData.get("email"),
      }),
    });

    const result = (await response.json()) as IResponse<any>;
    setIsMailSending(false);
    setMessage(result.message);
  };
  return (
    <form onSubmit={onFormSubmit} className="space-y-3 w-96 sm:w-full sm:mt-10">
      <input
        name="name"
        required
        className="outline-none w-full px-3 py-[0.7rem] text-sm bg-gray-100 rounded-md border-2"
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        required
        className="outline-none  w-full px-3 py-[0.7rem] text-sm bg-gray-100 rounded-md border-2"
        type="email"
        placeholder="Email ID"
      />
      <input
        required
        pattern="[0-9]{10}"
        title="Please Enter A Valid Mobile Number"
        name="number"
        className="outline-none w-full px-3 py-[0.7rem] text-sm bg-gray-100 rounded-md border-2"
        type="text"
        placeholder="Mobile Number"
      />
      <textarea
        name="message"
        rows={8}
        placeholder="Your Message"
        className="outline-none  w-full px-3 py-[0.7rem] text-sm bg-gray-100 rounded-md border-2"
      ></textarea>

      <button
        disabled={isMailSending}
        className="outline-none flex items-center justify-center w-full px-3 py-[0.7rem] text-sm bg-blue-400 rounded-md border-2 font-bold"
      >
        {isMailSending ? (
          <SpinnerSvg className="text-white" size="1rem" />
        ) : (
          <span>SUBMIT</span>
        )}
      </button>
      <div>
        <p
          className={`text-center text-sm text-green-600 ${
            message ? "opacity-100" : "opacity-0 "
          } transition-all duration-500`}
        >
          Successfully Submitted
        </p>
        <p
          className={`text-center text-sm text-green-600 ${
            message ? "opacity-100" : "opacity-0 "
          } transition-all duration-500`}
        >
          We will call you ASAP!
        </p>
      </div>
    </form>
  );
}

export default ContactPageForm;
