'use client';

import Image from "next/image";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setGalleryDialgo } from "../redux/slice/galleryDialogSlice";
import { RootState } from "../redux/store";


function GalleryDialog() {
  const { visibility, img } = useSelector((state  :RootState) => state.galleryDialog);
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setGalleryDialgo({visibility : false, img : ""}));
  }
  return (
    <section onClick={closeDialog} className={`w-full absolute top-0 bottom-0 z-50 bg-[#00000083] backdrop-blur-xl ${visibility ? "block" : "hidden"}`}>
      <div className={`w-full h-full flex items-center justify-center relative`}>
        <IoCloseOutline
          onClick={closeDialog}
          className="border border-white cursor-pointer absolute top-16 right-16 sm:right-6"
          color="#fff"
          size={28}
        />
        <Image
          className="w-full h-full object-contain"
          src={img}
          alt=""
          height={1200}
          width={1200}
        />
      </div>
    </section>
  );
}

export default GalleryDialog;