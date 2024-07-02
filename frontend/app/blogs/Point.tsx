import React from "react";
import { VscActivateBreakpoints } from "react-icons/vsc";

interface IProps {
  title: string;
  subtitle: string;
}

function Point({ title, subtitle }: IProps) {
  return (
    <li className="w-full flex items-start gap-4 sm:block">
      <div className="size-12 sm:float-left">
        <div className="size-10 shadow-2xl rounded-sm bg-cyan-600 flex items-center justify-center">
          <VscActivateBreakpoints color="#fff" />
        </div>
      </div>
      <div className="w-full">
        <h2 className="font-semibold text-lg tracking-wider">{title}</h2>
        <p
          dangerouslySetInnerHTML={{ __html: subtitle }}
          className="text-[15px] tracking-wider"
        ></p>
      </div>
    </li>
  );
}

export default Point;
