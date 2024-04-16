import React from "react";

interface IProps {
  name? : string;
  title: string;
  options: string[];
  className?: string;
  selectClassName? : string;
}

function Select(props: IProps) {
  return (
    <div className={`py-1 px-2 font-[600] text-sm  ${props.className}`}>
      <select
        name={props.name}
        className={`outline-none w-full cursor-pointer ${props.selectClassName}`}
      >
        <option value="" disabled selected>
          {props.title}
        </option>
        {props.options.map((eachItem) => (
          <option key={eachItem} value={eachItem}>
            {eachItem}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
