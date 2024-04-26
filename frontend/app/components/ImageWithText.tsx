import Image from 'next/image'
import React from 'react'

interface IProps {
    text : string;
    subtext : string;
    img : string;
}

function ImageWithText(props : IProps) {
  return (
    <div className="w-full relative group/foreignexcard overflow-hidden">
        <Image src={props.img} alt="" height={1200} width={1200} />
        <div className="w-full bg-[#000000a2] translate-y-[22rem] h-full group-hover/foreignexcard:translate-y-0 absolute bottom-0 px-8 pt-4 text-yellow-50 transition-all duration-500">
          <h3 className="font-[600] text-xl tracking-wider leading-none">
            {props.text}
          </h3>
          <p className="text-[15px] pt-20 text-justify group-hover/foreignexcard:pt-3 transition-all duration-500">
            {props.subtext}
          </p>
        </div>
      </div>
  )
}

export default ImageWithText