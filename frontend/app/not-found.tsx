import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "Sorry, we couldn't find the page you where looking for.",
};

export default function NotFoundPage() {
  return (
    <section className="flex items-center flex-wrap justify-between max-h-full h-[90vh] mx-auto w-[90%]">
      <div className="flex-grow flex items-center justify-center">
        <div className="space-y-4">
          <div className="bg-[#E0E4EB] inline px-2 py-1 text-sm font-semibold text-gray-500">
            404 page
          </div>
          <div>
            <h1 className="text-4xl tracking-wider font-semibold text-black">
              Oh No!
            </h1>
            <p className="text-gray-600 mt-1">
              This page is hiding from us. Let’s help you find something else.
            </p>
          </div>
          <div>
            <Link href={"/"}>
              <button className="bg-[#3259E8] text-white py-[0.58rem] px-6 text-xs tracking-wider rounded-2xl button-shdow ">
                Go To Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="overflow-hidden size-80 bg-[#E0E4EB] p-10 rounded-3xl">
          <Image
            className="size-full pb-11"
            src={"/404.svg"}
            alt="404 icon"
            height={1200}
            width={1200}
          />
        </div>
      </div>
    </section>
  );
}
