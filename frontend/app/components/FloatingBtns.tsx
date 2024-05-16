// "use client";

// import React from "react";
// import { AiOutlineMessage } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";

// function FloatingBtns() {
//   const dispatch = useDispatch();
//   return (
//     <div className="absolute bottom-10 right-10">
//       <div
//         onClick={() => dispatch(setNewContactUsDialog(true))}
//         className="size-12 rounded-full flex items-center justify-center bg-gray-900 cursor-pointer"
//       >
//         <AiOutlineMessage size={18} color="#fff" />
//       </div>
//     </div>
//   );
// }

// export default FloatingBtns;

"use client";

import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import RoundedBtn from "./RoundedBtn";
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { IoLogoWhatsapp } from "react-icons/io";

import { setNewContactUsDialog } from "../redux/slice/newContactUsDialgo";

function FloatingBtn() {
  const dispatch = useDispatch();
  const [otherBtnVisibility, setOtherBtnVisibility] = useState(false);

  const onExpandBtnClick = () => {
    setOtherBtnVisibility(!otherBtnVisibility);
  };

  const onMsgBtnClick = () => {
    dispatch(setNewContactUsDialog(true));
  };

  const onCallBtnClick = () => {
    window.open("tel:9831234910");
  };

  const onWhatsappBtnClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=%2B919831234910&text&type=phone_number&app_absent=0");
  }

  return (
    <div className="absolute bottom-14 right-20 z-10 flex flex-col gap-4 items-center sm:right-6">
      <h2
        className={`absolute w-32 px-5 text-[#1A1A1A] py-1 text-sm right-10 bottom-12 messageShape flex items-center justify-center font-semibold bg-[#34D399] ${
          otherBtnVisibility ? "scale-0" : "scale-1"
        } transition-all duration-300`}
      >
        Contact us
      </h2>
      <RoundedBtn
        title="Whatsapp Me Button"
        onClick={onWhatsappBtnClick}
        className={`bg-green-700 ${otherBtnVisibility ? "scale-1" : "scale-0"}`}
      >
        <IoLogoWhatsapp size={18} color="#fff" />
      </RoundedBtn>
      <RoundedBtn
        title="Call Me Button"
        onClick={onCallBtnClick}
        className={`bg-blue-800 ${otherBtnVisibility ? "scale-1" : "scale-0"}`}
      >
        <IoCallSharp size={18} color="#fff" />
      </RoundedBtn>
      <RoundedBtn
        title="Message Button"
        onClick={onMsgBtnClick}
        className={`bg-green-700 ${otherBtnVisibility ? "scale-1" : "scale-0"}`}
      >
        <LuMessagesSquare color="#fff" />
      </RoundedBtn>
      <RoundedBtn
        title="Contact Us Button"
        className={`bg-gray-800 rounded`}
        onClick={onExpandBtnClick}
      >
        {otherBtnVisibility ? (
          <IoCloseOutline size={20} color="#fff" />
        ) : (
          <AiFillMessage color="#fff" />
        )}
      </RoundedBtn>
    </div>
  );
}

export default FloatingBtn;
