import Image from "next/image";
import React from "react";

interface IProps {
  src: string;
  text?: string;
  className ? : string;
}

function PageIntroBanner({ src, text, className }: IProps) {
  return (
    <div className="w-full relative">
      <Image className={`w-full ${className}`} src={src} alt="" width={1200} height={1200} />

      <div className="w-full flex items-center justify-center bg-[#0000009c] absolute top-0 bottom-0 right-0 left-0">
        {!text ? null : (
          <h2 className="text-4xl font-extrabold text-white tracking-widest">
            {text}
          </h2>
        )}
      </div>
    </div>
  );
}

export default PageIntroBanner;
