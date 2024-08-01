import React from "react";
import Image from "next/image";

import image1 from "./../../public/next.svg";
import image2 from "./../../public/vercel.svg";
import image3 from "./../../public/image2.webp";

export const Slider2 = () => {
  return (
    <div className="flex space-x-16 overflow-hidden">
      <div className="flex space-x-16 animate-loop-scroll-neg">
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
      </div>
      <div
        className="flex space-x-16 animate-loop-scroll-neg "
        aria-hidden="true"
      >
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
      </div>
    </div>
  );
};
