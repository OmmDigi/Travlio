import React from "react";
import { GoDotFill } from "react-icons/go";
import ShimmerImage from "../components/ShimmerImage";
import { BLOGS_LIST_DATA } from "../constant";

interface IProps {
  children: React.ReactNode;
  heading: string;
  author: string;
  date: string;
  // catname: string;
  shortdescription: string;
  bannerimage: string;
}

function ReadBlogLayout(props: IProps) {

  const blogInfo = BLOGS_LIST_DATA.find((eachInfo) => eachInfo.img === props.bannerimage);

  return (
    <>
      <head>
        <meta property="og:title" content={props.heading} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.travlio.in` + blogInfo?.link} />
        <meta
          property="og:image"
          content={`https://www.travlio.in` + props.bannerimage}
        />
        <meta property="og:description" content={props.shortdescription} />

        <meta property="og:site_name" content="Travlio (Thomas Cook)" />
        <meta property="og:locale" content="en_US" />

        <meta
          name="twitter:card"
          content={`https://www.travlio.in` + props.bannerimage}
        />
        <meta name="twitter:title" content={props.heading} />
        <meta name="twitter:description" content={props.shortdescription} />
        <meta
          name="twitter:image"
          content={`https://www.travlio.in` + props.bannerimage}
        />
      </head>
      <div className="w-full min-h-screen px-28 py-5 sm:px-5">
        <div className="w-[90%] mx-auto sm:w-full">
          <div className="flex items-center gap-5 sm:gap-3">
            {/* <span className="text-sm">{props.catname}</span>{" "} */}
            {/* <GoDotFill size={12} className="text-gray-500" /> */}
            <span className="text-gray-700 text-sm">{props.author}</span>{" "}
            <GoDotFill size={12} className="text-gray-500" />
            <span className="text-xs text-gray-600">{props.date}</span>
          </div>

          <h1 className="text-3xl uppercase josefin-sans-568 text-emerald-700 font-semibold pt-4">
            {props.heading}
          </h1>
          {/* <p className="josefin-sans-350 text-justify text-[14px] w-[80%] sm:w-full mt-3">
          {props.shortdescription}
        </p> */}

          <ShimmerImage
            src={props.bannerimage}
            alt={props.heading}
            width={1280}
            height={1280}
            className="w-[70%] mt-4 sm:w-full rounded-3xl aspect-video"
          />
          <div className="w-[70%] h-full sm:w-full">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default ReadBlogLayout;
