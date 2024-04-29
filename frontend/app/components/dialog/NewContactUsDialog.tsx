"use client";

import React, { useState } from "react";
import ContactUsDialogInput from "./ContactUsDialogInput";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { setNewContactUsDialog } from "@/app/redux/slice/newContactUsDialgo";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { SEND_EMAIL_API } from "@/app/constant";
import { IResponse } from "@/app/types";

function NewContactUsDialog() {
  const [isMailSending, setIsMailSending] = useState(false);
  const [message, setMessage] = useState("");

  const newContactUsDialgoVisibility = useSelector(
    (state: RootState) => state.contactDialog
  );
  const dispatch = useDispatch();
  const closeDialgo = () => {
    dispatch(setNewContactUsDialog(false));
    setTimeout(() => {
      dispatch(setNewContactUsDialog(true));
    }, 30 * 1000)
  };
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsMailSending(true);
    setMessage("");
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
    <div
      onClick={closeDialgo}
      className={`w-full h-full bg-[#ffffff91] absolute backdrop-blur-sm top-0 bottom-0 z-50 ${
        newContactUsDialgoVisibility ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <div className={`flex items-center justify-center relative ${newContactUsDialgoVisibility ? "popupAnimaion" : ""}`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[25rem] sm:w-full bg-[#104465] sm:mx-3 rounded-2xl flex items-center flex-col py-8 px-12 pb-8 z-10 sm:px-7"
        >
          <span className="font-medium text-white text-2xl tracking-widest">
            TRAVLIO
          </span>
          <IoCloseOutline
            onClick={closeDialgo}
            className="absolute top-[32px] right-9 border rounded-full cursor-pointer hover:p-[2px] transition-all duration-300"
            size={25}
            color="#fff"
          />
          <form onSubmit={onFormSubmit} className="w-full">
            <div className="w-full space-y-4">
              <ContactUsDialogInput required name="name" text="Full Name" />
              <ContactUsDialogInput required name="email" text="Email ID" />
              <ContactUsDialogInput required name="number" text="Contact Number" />
              <div className="w-full mt-2">
                <span className="text-sm text-white">Your Message</span>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full text-sm outline-none px-3 py-2"
                ></textarea>
              </div>
            </div>
            <button
              disabled = {isMailSending}
              type="submit"
              className="bg-[#FED346] font-semibold w-full h-8 mt-3 text-sm"
            >
              SUBMIT
            </button>
            <p className={`w-full text-center text-xs pt-1 text-green-300 ${message === "" ? "hidden" : "block"}`}>Successfully sended</p>
            <div className="w-full flex items-center justify-center flex-col gap-2 pt-1">
              <Link
                href="tel:9831234910"
                className="flex items-center gap-1 text-[11px] tracking-widest text-gray-200 font-semibold"
              >
                <MdCall />
                <span>9831234910</span>
              </Link>
              <Link
                className="flex items-center gap-1 text-[11px] tracking-widest text-gray-200 font-semibold"
                href="mailto:subrata.ash@gmail.com"
              >
                <MdOutlineMailOutline size={12} />
                <span>subrata.ash@gmail.com</span>
              </Link>
            </div>
          </form>
        </div>
        <Image
          className="w-52 absolute -bottom-3 -right-32 z-20 sm:w-32 sm:right-0 sm:-bottom-14"
          src="/trolly.png"
          alt=""
          height={1200}
          width={1200}
        />
        <Image
          className="w-52 absolute -left-44 -top-5 -rotate-12 sm:hidden"
          src="/animated-bg-trees2.png"
          alt=""
          height={1200}
          width={1200}
        />
        <Image
          className="w-52 absolute z-20 -bottom-4 -left-36 sm:w-32 sm:left-0 sm:-top-14"
          src="/beachChair.png"
          alt=""
          height={1200}
          width={1200}
        />
      </div>
    </div>
  );
}

export default NewContactUsDialog;
