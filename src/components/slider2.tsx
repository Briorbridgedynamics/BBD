import React from "react";
import Image from "next/image";
import image1 from "./../../public/logo/logo2.png";
import image2 from "./../../public/logo/logo1.png";
import image3 from "./../../public/logo/logo4.png";

export const Slider2 = () => {
  return (
    <div className="flex space-x-16 overflow-hidden">
      <div className="flex space-x-16 animate-loop-scroll-neg">
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image3} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image3} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
      </div>
      <div
        className="flex space-x-16 animate-loop-scroll-neg "
        aria-hidden="true"
      >
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image3} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image3} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image1} alt="" className="h-[100px] max-w-none "></Image>
        <Image src={image2} alt="" className="h-[100px] max-w-none "></Image>
      </div>
    </div>
  );
};
