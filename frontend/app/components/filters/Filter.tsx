import React from "react";

interface IProps {
  name: string;
  filters: string[];
}

function Filter(props: IProps) {
  return (
    <div className="py-2 px-2 border-b">
      <h2 className="font-semibold pb-2 text-sm">{props.name}</h2>
      <ul className="w-full text-xs text-gray-500 space-y-4">
        {props.filters.map((item, index) => (
          <li key={index} className="w-full gap-3 flex items-center">
            <input type="checkbox" className="cursor-pointer" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
