"use client"

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { setGalleryDialgo } from "../redux/slice/galleryDialogSlice";

interface IProps {
  image: string;
}

function GalleryImageItem({ image }: IProps) {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() =>
        dispatch(setGalleryDialgo({ visibility: true, img: image }))
      }
      className="h-[153px] bg-black overflow-hidden"
    >
      <Image
        src={image}
        className="object-cover cursor-pointe h-full w-fullr"
        alt=""
        height={1280}
        width={1200}
      />
    </li>
  );
}

export default GalleryImageItem;
