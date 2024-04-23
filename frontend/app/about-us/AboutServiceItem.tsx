import React from "react";
import { IoMdAirplane } from "react-icons/io";

interface IProps {
  text? : string;
  subtext? : string;
  icon: React.ReactNode;
  itemsDirection: "left" | "right";
}

function AboutServiceItem({text, subtext, icon, itemsDirection }: IProps) {
  return (
    <li className="w-full">
      <div
        className={`flex items-center gap-6 ${
          itemsDirection === "right" ? "" : "flex-row-reverse"
        }`}
      >
        <div>
          <h2
            className={`source-sans-3-500 ${
              itemsDirection === "right" ? "text-right" : "text-left"
            }`}
          >
            {text}
          </h2>
          <p
            className={`text-[13.4px] source-sans-3-200 ${
              itemsDirection === "right" ? "text-right" : "text-left"
            } text-gray-600 `}
          >
            {subtext}
          </p>
        </div>
        <div className="size-20 pt-3">{icon}</div>
      </div>
    </li>
  );
}

export default AboutServiceItem;
